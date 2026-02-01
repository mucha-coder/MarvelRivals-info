import { defineCollection, z } from 'astro:content';

// 記事コレクションのスキーマ定義
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        // 必須フィールド
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),

        // 更新日（オプション）
        updatedDate: z.coerce.date().optional(),

        // ヒーロー画像
        heroImage: z.string().optional(),

        // 記事カテゴリ
        category: z.enum(['patch-notes', 'hero-balance', 'events', 'guides']),

        // 関連ヒーロー（複数可）
        heroes: z.array(z.string()).optional(),

        // 言語識別子
        lang: z.enum(['ja', 'en']),
    }),
});

export const collections = {
    posts: postsCollection,
};
