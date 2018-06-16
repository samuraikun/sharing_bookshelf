// These are mocks of Google Books API
// https://developers.google.com/books
const books = [
  {
    title: 'React入門 React・Reduxの導入からサーバサイドレンダリングによるUXの向上まで',
    subtitle: "",
    authors: [
      "穴井宏幸",
      "柴田和祈",
      "石井直矢",
      "三宮肇"
    ],
    publisher: '翔泳社',
    publishedDate: "2018-02-19",
    description: "Webアプリケーションを高速で動作させる！ Reactの概念からデプロイまでモダンWebアプリケーション開発の全体像がわかる！ 本書はWebアプリケーション開発で、 人気を博しているReactについて解説した書籍です。 ReactはFacebookがリリースしたJavaScriptのライブラリで、 Webアプリケーションをネイティブアプリケーションのように、 動作させるために開発されました。 本書は、以下のような構成となっています。 第1章：Reactを扱うために重要な概念となるRedux・Fluxの解説をします。 第2章：create-react-appを使ったインストール方法を解説しReactを導入します。 第3章：Reactで使用するJSXの文法を紹介します。 第4章：Reactの基本となるコンポーネント指向について解説します。 第5章：アプリケーションの状態を管理します。 第6章：画面遷移についてrouterを学びます。 第7章：middlewareを実装していきます。 第8章：SPAでは必須の非同期処理について解説します。 第9章：UIについて学び、アニメーションを実装していきます。 第10章：より実践的なアプリケーションを作成し、開発の流れを学びます。 第11章：Webアプリケーション開発に必須のテストについて解説します。 第12章：開発したアプリケーションを公開できるようにデブロイについて学びます。 第13章：よりよいアプリケーションにするためにサーバサイドレンダリングについて解説します。 インストールの解説から、 チュートリアルを通したコードの説明など、 Reactを用いた開発がはじめての方でも 安心して入門することができます。 また情報が少ないテストやデプロイ、 またUI/UXの適切な設定など実際の開発の現場で、 役立つ事柄についても詳しく説明しています。 これから迅速なWebアプリケーションを作成する必要がある方や、 最新のフロントエンドの事情をくわしく知りたい方におすすめの一冊です。 【本書の特長】 ●Reactの基本から応用まで実践的に学べる ●Reactを扱うための概念や手法を学べる ●UI/UX・テスト・デプロイなど本格的にReactを学べる",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=SuFLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=SuFLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "React開発現場の教科書",
    subtitle: "",
    authors: [
      "石橋啓太"
    ],
    publishedDate: "2018-03",
    description: "Atomic DesignによるモダンUIコンポーネント開発。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=ObMqtQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "作りながら学ぶReact入門",
    authors: [
      "吉田裕美"
    ],
    publisher: "秀和システム",
    publishedDate: "2017-09",
    description: "Facebook開発の最新JSライブラリーを、シンプルなアプリケーションを、作りながら学べます!ていねいな開発環境構築ではじめての人も安心。WindowsとMacに対応。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=dfQ8DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=dfQ8DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  }
];

export default books;