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

# Provider
 グローバルで使用したい場合、layoutファイルにて<>（タグ）で囲むこと

# UI
  折角だし、もっとリッチなUIにしたい。
  そもそもアイデアが・・・・

# Next.jsキャッシュ
  1回fetchするとキャッシュからとってくる（なので2回目からは更新されない）
　オプトアウト　no-storeつける
　基本キャッシュつける

# データキャッシュとメモリリクエスト化の違い
フェッチは子要素でかいても、同じURLからなら複数キャッシュされないので子要素にする

# ルーターキャッシュ
部分的なデータだけキャッシュされる。画面はHTML化される
30s間はバックエンドにアクセスしてくれない
フロント側が反映されない
→Ver１５から、この機能はなくなるらしい
オプトアウトしてもアクセスしてくれない
Appルータではなく、pageルータであれば問題ない

# git ディレクトリRename
 大文字小文字を認証できるようにする。
 　git config core.ignorecase false
　ディレクトリ名を変える。例）Login⇒login
　コミットする。大文字と小文字がある状態になる。
　変更前のディレクトリを削除する
　git rm -r src/app/Login
　コミットする際に、変更後も削除状態になっているので、それは解除してコミット

# Auth.js
 https://authjs.dev/getting-started


## SWRの公式
https://swr.vercel.app/ja/docs/getting-started

 ------------------------------------------------------------------------------------------------------------
 #　アイコン　いろいろあって悩む
　　　SVGアイコンを使ってはみた　https://fonts.google.com/icons  https://iconbuddy.com/

 # ディレクトリ構成
      整理しよう　　machineInfoActionは、fechers?
