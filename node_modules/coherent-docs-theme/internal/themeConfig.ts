interface Topic {
    label?: string
    href?: string
    icon?: string
}

export interface CoherentThemeOptions {
    documentationSearchTag:
    'Gameface Custom Engine' | 'Prysm Custom Engine' |
    'Gameface Unreal' | 'Prysm Unreal' |
    'Gameface Unity' | 'Prysm Unity' |
    'UI Tools' |
    'Gameface UI' | string
    topicsConfig?: {
        native?: Topic
        unreal?: Topic
        unity?: Topic
    }
    version?: string
    currentTopicId?: string
    showPageProgress?: boolean;
    navLinks?: Array<{ label: string; href: string, subDocumentations?: string[] }>;
    disableDefaultLogo?: boolean;
    replacesTitle?: boolean
    tagManagerId?: string
    breadcrumbs?: boolean
}

export default function getThemeConfig(): CoherentThemeOptions {
    let themeConfig = {
        documentationSearchTag: '',
        showPageProgress: false,
        navLinks: [],
        disableDefaultLogo: false,
        tagManagerId: '',
        breadcrumbs: true,
        topicsConfig: {},
        currentTopicId: 'native',
        version: '0.0.0.0'
    } as CoherentThemeOptions;

    if (process.env.COHERENT_THEME_CONFIG) {
        try {
            themeConfig = { ...themeConfig, ...JSON.parse(process.env.COHERENT_THEME_CONFIG) };
        } catch (e) {
            console.error("Failed to parse Coherent Theme config");
        }
    }

    return themeConfig;
}
