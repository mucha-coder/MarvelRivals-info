export const languages = {
    ja: '日本語',
    en: 'English',
} as const;

export const defaultLang = 'ja' as const;

export type Lang = keyof typeof languages;

// UI翻訳データ
export const ui = {
    ja: {
        'site.title': 'Marvel Rivals Info',
        'site.description': 'Marvel Rivalsの最新アップデート情報、パッチノート、ヒーロー調整情報をお届けします',
        'nav.home': 'ホーム',
        'nav.patchNotes': 'パッチノート',
        'nav.heroBalance': 'ヒーロー調整',
        'nav.events': 'イベント',
        'nav.guides': 'ガイド',
        'post.readMore': '続きを読む',
        'post.publishedAt': '公開日',
        'post.updatedAt': '更新日',
        'post.category': 'カテゴリ',
        'post.relatedHeroes': '関連ヒーロー',
        'post.readInEnglish': 'Read in English',
        'post.readInJapanese': '日本語で読む',
        'category.patch-notes': 'パッチノート',
        'category.hero-balance': 'ヒーロー調整',
        'category.events': 'イベント',
        'category.guides': 'ガイド',
        'footer.copyright': '© 2026 Marvel Rivals Info. 非公式ファンサイトです。',
        'footer.disclaimer': 'このサイトはMarvel EntertainmentおよびNetEase Gamesとは一切関係ありません。',
    },
    en: {
        'site.title': 'Marvel Rivals Info',
        'site.description': 'Get the latest Marvel Rivals updates, patch notes, and hero balance information',
        'nav.home': 'Home',
        'nav.patchNotes': 'Patch Notes',
        'nav.heroBalance': 'Hero Balance',
        'nav.events': 'Events',
        'nav.guides': 'Guides',
        'post.readMore': 'Read More',
        'post.publishedAt': 'Published',
        'post.updatedAt': 'Updated',
        'post.category': 'Category',
        'post.relatedHeroes': 'Related Heroes',
        'post.readInEnglish': 'Read in English',
        'post.readInJapanese': '日本語で読む',
        'category.patch-notes': 'Patch Notes',
        'category.hero-balance': 'Hero Balance',
        'category.events': 'Events',
        'category.guides': 'Guides',
        'footer.copyright': '© 2026 Marvel Rivals Info. Unofficial fan site.',
        'footer.disclaimer': 'This site is not affiliated with Marvel Entertainment or NetEase Games.',
    },
} as const;

/**
 * 翻訳関数を取得
 */
export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

/**
 * URLから現在の言語を取得
 */
export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Lang;
    return defaultLang;
}

/**
 * 言語を切り替えたパスを取得
 */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
    // 現在のパスから言語プレフィックスを除去
    const path = pathname.replace(/^\/(en|ja)/, '').replace(/^\//, '');

    if (targetLang === 'ja') {
        // デフォルト言語（日本語）はプレフィックスなし
        return `/${path}` || '/';
    }
    // 英語はプレフィックスあり
    return path ? `/en/${path}` : '/en';
}
