const { execSync } = require('child_process');
const path = require('path');
const process = require('process');
const githubToken = process.env.TOKEN;
const worspaceDir = process.env.WORKSPACE_DIR || process.cwd();
const userName = process.env.INPUT_USER_NAME || process.env.GITHUB_ACTOR;
const email = process.env.INPUT_USER_EMAIL || `${process.env.GITHUB_ACTOR}@users.noreply.github.com`;
const deployCommitMessage = `deploy: ${process.env.GITHUB_SHA || gitOutput('git rev-parse HEAD')}`;
const docsDir = worspaceDir;
const docsBuildDir = path.join(worspaceDir, '../docs-dist');
const GH_PAGES_BRANCH = 'gh-pages';

function exec(command, cwd = worspaceDir) {
    return execSync(command, { cwd, stdio: 'inherit' });
}

function gitOutput(command, cwd = worspaceDir) {
    return execSync(command, { cwd, stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
}

/**
 * Will return the remote url that works with token
 * @returns {string}
 */
function getRemoteUrl() {
    const publishRepo = process.env.GITHUB_REPOSITORY;

    if (!githubToken || !publishRepo) {
        return gitOutput('git remote get-url origin');
    }

    return `https://x-access-token:${githubToken}@github.com/${publishRepo}.git`;
}

function prepareDocs() {
    console.log('::group::Preparing documentation for deploy');
    console.log('[INFO] Installing documentation modules');
    exec('rm -rf node_modules');
    exec('rm -rf package-lock.json');
    exec('npm install', docsDir);
    console.log('[INFO] Building documentation');
    exec('npm run build', docsDir);
    console.log(`[INFO] Creating a temp folder of the documentation source to ${docsBuildDir}`);
    exec(`cp -R dist ${docsBuildDir}`, docsDir);
    console.log('::endgroup::');
}

function transferDocs() {
    console.log(`::group::Transfer documentation to ${GH_PAGES_BRANCH}`);
    console.log(`[INFO] Fetching repository...`);
    exec(`git fetch --no-recurse-submodules`);
    console.log(`[INFO] Checking out ${GH_PAGES_BRANCH} branch`);
    exec(`git checkout -f ${GH_PAGES_BRANCH} --`);
    console.log(`Clearing the previous branch files`);
    exec('rm -rf *');
    console.log(`Copying the documentation source from ${docsBuildDir} to the branch`);
    exec(`cp -R ${docsBuildDir}/* ./`);
    console.log(`Copied the documentation source from ${docsBuildDir} to the branch`);
    console.log(`Creating .nojekyll file`);
    exec(`touch ./.nojekyll`);
    console.log(`Created .nojekyll file`);
    console.log('::endgroup::');
}

function deployDocs() {
    console.log(`::group::Deploy documentation to ${GH_PAGES_BRANCH}`);
    const changes = execSync(`git status`, { cwd: worspaceDir });

    if (changes.toString().indexOf('nothing to commit, working tree clean') !== -1) {
        console.log(`[INFO] There are no new changes in the documentation. Will skip the deploy.`);
        console.log('::endgroup::');
        return;
    }

    console.log('[INFO] Files has been changed.\n' + changes);
    const remoteURL = getRemoteUrl();
    console.log(`[INFO] Setting remote URL with token`);
    exec(`git remote rm origin`);
    exec(`git remote add origin ${remoteURL}`);
    console.log(`[INFO] Staging documentation files`);
    exec(`git add -A`);
    console.log(`[INFO] Setting git config`);
    exec(`git config user.name ${userName}`);
    exec(`git config user.email ${email}`);
    console.log(`[INFO] Committing the changes`);
    exec(`git commit -m "${deployCommitMessage}"`);
    console.log(`[INFO] Push the changes to ${GH_PAGES_BRANCH}`);
    exec(`git push origin ${GH_PAGES_BRANCH}`);
    console.log('::endgroup::');
}

function main() {
    console.log('::group::Dump input data');
    console.log(`\
[INFO] UserName: ${userName}
[INFO] UserEmail: ${email}
[INFO] DeployCommitMessage: ${deployCommitMessage}
`);
    console.log('::endgroup::');

    prepareDocs();
    transferDocs();
    deployDocs();
}

main();