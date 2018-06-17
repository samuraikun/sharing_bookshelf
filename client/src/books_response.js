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
    description: "Webアプリケーションを高速で動作させる！ Reactの概念からデプロイまでモダンWebアプリケーション開発の全体像がわかる！", 
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
  },
  {
    title: "Pythonで動かして学ぶ！ あたらしい機械学習の教科書",
    authors: [
      "伊藤真"
    ],
    publisher: "翔泳社",
    publishedDate: "2018-01-24",
    description: "【本書の概要】 人工知能開発の分野では、機械学習（教師あり学習）を利用した開発が非常に多くなってきています。 本書は学習環境の準備から始まり、Pythonの基本および数学の基本を丁寧に解説。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=ViFHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=ViFHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "Python機械学習プログラミング 達人データサイエンティストによる理論と実践",
    authors: [
      "Sebastian Raschka",
      "株式会社クイープ",
      "福島 真太朗"
    ],
    publisher: "（株）インプレス",
    publishedDate: "2016-06-30",
    description: "機械学習の考え方とPython実装法がわかる! 分類/回帰問題や深層学習の導入を解説。",
    categories: [
      "Computers"
    ],
    imageLinks: {
    smallThumbnail: "http://books.google.com/books/content?id=wmp8DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    thumbnail: "http://books.google.com/books/content?id=wmp8DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "［第2版］Python機械学習プログラミング 達人データサイエンティストによる理論と実践",
    authors: [
      "Sebastian Raschka",
      "Vahid Mirjalili",
      "株式会社クイープ",
      "福島真太朗"
    ],
    publisher: "インプレス",
    publishedDate: "2018-03-16",
    description: "機械学習本ベストセラーの第2版！ 著者陣の経験に基づく洞察とより専門的な知識を学べる 機械学習の各コンセプトについて、理論や数学的背景、Pythonコーディングの実際を網羅的に解説。",
    categories: [
      "Computers"
    ],
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=r_JQDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=r_JQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  }
];

export default books;