# 📝 Next.js Todo App

Next.js の主要な技術スタックを学ぶための Todo アプリケーションです。

## 🎯 学習目的

このプロジェクトは、以下の技術スタックを実践的に学ぶために作成しました。

- **Next.js** - React ベースのフルスタックフレームワーク
- **React Server Components (RSC)** - サーバーサイドでのコンポーネントレンダリング
- **Tailwind CSS** - ユーティリティファーストの CSS フレームワーク
- **shadcn/ui** - 再利用可能な UI コンポーネントライブラリ
- **ESLint** - コード品質の維持
- **Prettier** - コードフォーマッター
- **Zod** - スキーマバリデーション
- **Prisma** - 型安全な ORM
- **Vitest** - Vite環境向けに最適化されたユニットテストフレームワーク

## 🚀 Getting Started

### セットアップ

1. **リポジトリのクローン**

```bash
git clone https://github.com/atria0410/todo-app.git
cd https://github.com/atria0410/todo-app.git
```

2. **依存関係のインストール**

```bash
npm install
```

3. **環境変数の設定**

`.env.example` をコピーして `.env.local` を、  
`.env.production.example` をコピーして `.env.production` を作成し、  
必要な環境変数を設定してください。

```bash
cp .env.example .env.local
cp .env.production.example .env.production
```

4. **データベースのセットアップ**

```bash
# Prisma マイグレーションの実行
npx prisma migrate dev

# (オプション) Prisma Studio でデータベースを確認
npx prisma studio
```

5. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## 📁 プロジェクト構成

```
├── app/                   # Next.js App Router
│   ├── (authenticated)/   # 認証済みルート
│   ├── (public)/          # 一般公開ルート
│   ├── api/               # API Routes
│   ├── data/              # データアクセスレイヤー
│   └── ...
├── components/            # React コンポーネント
│   ├── ui/                # shadcn/ui コンポーネント
│   └── ...                # カスタムコンポーネント
├── lib/                   # ユーティリティ
│   ├── schemas/           # Zodスキーマ定義
├── prisma/                # Prisma スキーマとマイグレーション
├── public/                # 静的ファイル
├── tests/                 # テストコード
└── types/                 # TypeScript型定義
```

## 🛠️ 利用可能なコマンド

| コマンド         | 説明                            |
| ---------------- | ------------------------------- |
| `npm run dev`    | 開発サーバーを起動              |
| `npm run build`  | 本番用ビルドを作成              |
| `npm run start`  | 本番サーバーを起動              |
| `npm run lint`   | ESLint でコードをチェック       |
| `npm run format` | Prettier でコードをフォーマット |
| `npm run test`   | Vitest でユニットテスト         |

## 📚 学習リソース

各技術の詳細については、公式ドキュメントを参照してください：

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/docs)
- [Vitest](https://vitest.dev/)

## 📄 License

MIT License
