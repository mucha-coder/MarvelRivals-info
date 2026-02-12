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

        // Heroes
        'hero.Iron Man': 'アイアンマン',
        'hero.Iron Fist': 'アイアン・フィスト',
        'hero.Adam Warlock': 'アダム・ウォーロック',
        'hero.Angela': 'アンジェラ',
        'hero.Invisible Woman': 'インビジブル・ウーマン',
        'hero.Vision': 'ヴィジョン',
        'hero.Winter Soldier': 'ウィンター・ソルジャー',
        'hero.Venom': 'ヴェノム',
        'hero.Warlock': 'ウォーロック',
        'hero.Ultron': 'ウルトロン',
        'hero.Wolverine': 'ウルヴァリン',
        'hero.Elsa Bloodstone': 'エルサ・ブラッドストーン',
        'hero.Emma Frost': 'エマ・フロスト',
        'hero.Galacta': 'ギャラクタ',
        'hero.Gambit': 'ガンビット',
        'hero.Captain America': 'キャプテン・アメリカ',
        'hero.Cloak & Dagger': 'クローク＆ダガー',
        'hero.Groot': 'グルート',
        'hero.Psylocke': 'サイロック',
        'hero.The Thing': 'ザ・シング',
        'hero.Jeff the Land Shark': 'ジェフ・ザ・ランド・シャーク',
        'hero.Scarlet Witch': 'スカーレット・ウィッチ',
        'hero.Squirrel Girl': 'スクイレル・ガール',
        'hero.Star-Lord': 'スター・ロード',
        'hero.Storm': 'ストーム',
        'hero.Spider-Man': 'スパイダーマン',
        'hero.Thor': 'ソー',
        'hero.Deadpool': 'デッドプール',
        'hero.Doctor Strange': 'ドクター・ストレンジ',
        'hero.Namor': 'ネイモア',
        'hero.Hulk': 'ハルク',
        'hero.The Punisher': 'パニッシャー',
        'hero.Human Torch': 'ヒューマン・トーチ',
        'hero.Phoenix': 'フェニックス',
        'hero.Black Widow': 'ブラック・ウィドウ',
        'hero.Black Panther': 'ブラックパンサー',
        'hero.Blade': 'ブレイド',
        'hero.Hela': 'ヘラ',
        'hero.Peni Parker': 'ペニー・パーカー',
        'hero.Hawkeye': 'ホークアイ',
        'hero.Magneto': 'マグニートー',
        'hero.Magik': 'マジック',
        'hero.Mantis': 'マンティス',
        'hero.Mister Fantastic': 'ミスター・ファンタスティック',
        'hero.Moon Knight': 'ムーンナイト',
        'hero.Rocket Raccoon': 'ロケット・ラクーン',
        'hero.Loki': 'ロキ',
        'hero.Luna Snow': 'ルナ・スノー',
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

        // Heroes
        'hero.Iron Man': 'Iron Man',
        'hero.Iron Fist': 'Iron Fist',
        'hero.Adam Warlock': 'Adam Warlock',
        'hero.Angela': 'Angela',
        'hero.Invisible Woman': 'Invisible Woman',
        'hero.Vision': 'Vision',
        'hero.Winter Soldier': 'Winter Soldier',
        'hero.Venom': 'Venom',
        'hero.Warlock': 'Warlock',
        'hero.Ultron': 'Ultron',
        'hero.Wolverine': 'Wolverine',
        'hero.Elsa Bloodstone': 'Elsa Bloodstone',
        'hero.Emma Frost': 'Emma Frost',
        'hero.Galacta': 'Galacta',
        'hero.Gambit': 'Gambit',
        'hero.Captain America': 'Captain America',
        'hero.Cloak & Dagger': 'Cloak & Dagger',
        'hero.Groot': 'Groot',
        'hero.Psylocke': 'Psylocke',
        'hero.The Thing': 'The Thing',
        'hero.Jeff the Land Shark': 'Jeff the Land Shark',
        'hero.Scarlet Witch': 'Scarlet Witch',
        'hero.Squirrel Girl': 'Squirrel Girl',
        'hero.Star-Lord': 'Star-Lord',
        'hero.Storm': 'Storm',
        'hero.Spider-Man': 'Spider-Man',
        'hero.Thor': 'Thor',
        'hero.Deadpool': 'Deadpool',
        'hero.Doctor Strange': 'Doctor Strange',
        'hero.Namor': 'Namor',
        'hero.Hulk': 'Hulk',
        'hero.The Punisher': 'The Punisher',
        'hero.Human Torch': 'Human Torch',
        'hero.Phoenix': 'Phoenix',
        'hero.Black Widow': 'Black Widow',
        'hero.Black Panther': 'Black Panther',
        'hero.Blade': 'Blade',
        'hero.Hela': 'Hela',
        'hero.Peni Parker': 'Peni Parker',
        'hero.Hawkeye': 'Hawkeye',
        'hero.Magneto': 'Magneto',
        'hero.Magik': 'Magik',
        'hero.Mantis': 'Mantis',
        'hero.Mister Fantastic': 'Mister Fantastic',
        'hero.Moon Knight': 'Moon Knight',
        'hero.Rocket Raccoon': 'Rocket Raccoon',
        'hero.Loki': 'Loki',
        'hero.Luna Snow': 'Luna Snow',
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
