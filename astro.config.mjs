import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    // サイトURL（デプロイ時に変更）
    site: 'https://marvel-rivals-info.pages.dev',

    // i18n設定
    i18n: {
        // デフォルト言語
        defaultLocale: 'ja',
        // サポートする言語
        locales: ['ja', 'en'],
        // ルーティング設定
        routing: {
            // デフォルト言語はプレフィックスなし
            // 日本語: /記事スラッグ
            // 英語: /en/記事スラッグ
            prefixDefaultLocale: false,
        },
    },

    // Tailwind CSS統合
    integrations: [tailwind()],
});
