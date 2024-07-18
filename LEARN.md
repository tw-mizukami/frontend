## Next.jsによるフロントエンドの学習

# フォルダ構成
▶app:

    ▶api:
    ▶components:各部品群
    ▶libs:
    ▶Resitered:ページフォルダ。ページ名フォルダの中にpage.tsxファイルを用意。
    global.css
    -layout.tsx
    -page.tsx
    -Type.ts

▶Providers:グローバルで保存しておきたいデータ

# Page

- Pageはサーバーサイドのコードとする（use clientは定義しないこと）
- export defaultを付けること