import type { HookParameters } from '@astrojs/starlight/types'
import type { AstroIntegrationLogger } from 'astro'

export function overrideComponents(
    starlightConfig: StarlightUserConfig,
    overrides: ComponentOverride[],
    logger: AstroIntegrationLogger,
): StarlightUserConfig['components'] {
    const components = { ...starlightConfig.components }

    for (const override of overrides) {
        const name = typeof override === 'string' ? override : override.name
        if (starlightConfig.components?.[name]) {
            logger.info(`Overriding coherent-docs-theme's \`<${name}>\` component with \`${starlightConfig.components?.[name]}\`.`)
            continue
        }
        components[name] = `coherent-docs-theme/overrides/${name}.astro`
    }

    return components
}

type StarlightUserConfig = HookParameters<'config:setup'>['config']

type ComponentOverride =
    | keyof NonNullable<StarlightUserConfig['components']>
    | {
        name: keyof NonNullable<StarlightUserConfig['components']>
    }
