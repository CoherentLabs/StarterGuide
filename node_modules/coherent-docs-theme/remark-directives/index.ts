import remarkDirective from 'remark-directive';
import { remarkIfDirective } from "./if";
import { remarkIncludeSnippets } from "./includeSnippets";
import { remarkReleaseDirective } from './release';
import { remarkInternalDirective } from './internal';
import { remarkProductNameDirective } from './productName';
import { remarkFixDoxybookLinks } from './apiRefFixLinks';
import { remarkCoherentAutoImport } from './autoModuleImport';

export const directives = [
    remarkDirective,
    remarkIncludeSnippets,
    remarkCoherentAutoImport,
    remarkIfDirective,
    remarkInternalDirective,
    remarkReleaseDirective,
    remarkProductNameDirective,
    remarkFixDoxybookLinks
];