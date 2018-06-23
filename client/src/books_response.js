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
  },
  {
    title: "Ruby on Rails 5の上手な使い方 現場のエンジニアが教えるRailsアプリケーション開発の実践手法",
    authors: [
      "太田智彬",
      "株式会社リクルートテクノロジーズ",
      "宗像亜由美",
      "寺下翔太",
      "手塚亮"
    ],
    publisher: "翔泳社",
    publishedDate: "2018-01-24",
    description: "開発からリリースや運用まで、 ベストプラクティスが一冊でわかる！ 本書は、Ruby on Rails 5によるアプリケーションの 開発からリリース・運用まで、そのベストプラクティスが一冊でわかる本です。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=VCFHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=VCFHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "プログラマのためのDocker教科書 第2版 インフラの基礎知識&コードによる環境構築の自動化",
    authors: [
      "WINGSプロジェクト阿佐志保"
    ],
    publisher: "翔泳社",
    publishedDate: "2018-04-11",
    description: "インフラ基礎知識＋インフラ環境構築 入門書の決定版！ 本書は、コンテナ技術を使ったアプリケーション実行環境プラットフォームである「Docker」を使ってインフラを構築するための入門書として好評を博した前著の改訂版です。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=wexTDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=wexTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "プログラマのためのDocker教科書 インフラの基礎知識＆コードによる環境構築の自動化",
    authors: [
      "山田祥寛",
      "WINGSプロジェクト阿佐志保"
    ],
    publisher: "翔泳社",
    publishedDate: "2015-11-19",
    description: "従来、システム開発のプログラマは、顧客の業務要件を理解し、要件に応じた設計を行ない、プログラミング言語を使ってシステムを実装し、仕様通りの機能を持つかをテストすることが主なミッションでした。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=EbrmCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=EbrmCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "コンテナ・ベース・オーケストレーション Docker/Kubernetesで作るクラウド時代のシステム基盤",
    authors: [
      "須江信洋",
      "福田潔",
      "平岡大祐",
      "市川豊",
      "青山尚暉",
      "山田修司",
      "佐藤聖規",
      "境川章一郎",
      "前佛雅人",
      "橋本直哉",
      "矢野哲朗"
    ],
    publisher: "翔泳社",
    publishedDate: "2018-03-15",
    description: "Dockerだけでは終わらない？！ コンテナ技術を実践的に使うための解説書！ コンテナは主としてLinuxを分割し、複数のOSとして利用するもので、1つのコンピュータを分割して利用する技術の新潮流です。",
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=n5VRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=n5VRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "AWSによるサーバーレスアーキテクチャ",
    authors: [
      "長尾 高弘"
    ],
    publisher: "翔泳社",
    publishedDate: "2018-03-14",
    description: "クラウドコンピューティングの技術の中でも、昨今注目を集めているのがサーバーレスアーキテクチャです。 FaaS(Function-As-A-Service)とも呼ばれるサーバーレスアーキテクチャは、ファンクション(関数)と呼ばれるマイクロサービスを実装し、組み合わせながら、サービスを構築していくアーキテクチャです。",
    categories: [
      "Computers"
    ],
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=vZVRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=vZVRDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  },
  {
    title: "AWS Lambda実践ガイド",
    authors: [
      "大澤 文孝"
    ],
    publisher: "インプレス",
    publishedDate: "2017-10-16",
    description: "AWSで展開されている現行システムのほとんどは、開発したプログラムを動かすために、仮想サーバーとしてEC2インスタンスを利用しています。仮想サーバーという違いこそあれ、構成そのものは、オンプレミスのときと大きく変わっていません。",
    categories: [
      "Computers"
    ],
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=HDs4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=HDs4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "ja"
  }
];

export default books;