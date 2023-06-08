export type Skill = {
  name: string;
  children?: Skill[];
} & ({ type: 'pending'; daysOfExperience: number } | { type: 'inProgress'; since: Date });

export const skills: Skill[] = [
  {
    name: 'プログラミング言語',
    type: 'pending',
    daysOfExperience: 0,
    children: [
      {
        name: 'TypeScript',
        type: 'inProgress',
        since: new Date(2021, 0, 1),
      },
      {
        name: 'JavaScript',
        type: 'inProgress',
        since: new Date(2015, 0, 1),
        children: [
          { name: 'React', type: 'inProgress', since: new Date(2021, 0, 1) },
          { name: 'Next.js', type: 'inProgress', since: new Date(2021, 5, 1) },
          { name: 'Gatsby.js', type: 'pending', daysOfExperience: 365 },
          { name: 'Jest', type: 'inProgress', since: new Date(2022, 5, 23) },
        ],
      },
      { name: 'Node.js', type: 'inProgress', since: new Date(2021, 0, 1) },
      {
        name: 'Java',
        type: 'pending',
        daysOfExperience: 365 * 2 + 30 * 9,
      },
      {
        name: 'HTML',
        type: 'inProgress',
        since: new Date(2015, 0, 1),
        children: [{ name: 'Pug', type: 'pending', daysOfExperience: 365 }],
      },
      {
        name: 'CSS',
        type: 'inProgress',
        since: new Date(2015, 0, 1),
        children: [{ name: 'SCSS', type: 'inProgress', since: new Date(2021, 0, 1) }],
      },
      { name: 'VBA', type: 'inProgress', since: new Date(2021, 0, 1) },
    ],
  },
  {
    name: 'データベース',
    type: 'pending',
    daysOfExperience: 0,
    children: [{ name: 'db2', type: 'pending', daysOfExperience: 365 * 2 + 30 * 9 }],
  },
  {
    name: 'ツール・サービス',
    type: 'pending',
    daysOfExperience: 0,
    children: [
      { name: 'VSCode', type: 'inProgress', since: new Date(2021, 0, 1) },
      { name: 'Docker', type: 'inProgress', since: new Date(2022, 0, 1) },
      { name: 'Git', type: 'inProgress', since: new Date(2021, 0, 1) },
      { name: 'Firebase', type: 'inProgress', since: new Date(2022, 0, 1) },
      { name: 'Sentry', type: 'inProgress', since: new Date(2022, 5, 23) },
    ],
  },
];

export type Service = {
  title: string;
  description: string;
  imageName?: string;
  emoji: string;
};

export const services: Service[] = [
  {
    title: 'ウェブサイト制作',
    description:
      '企業サイト、個人ブログ、LPなど、Webサイト制作全般に経験があります。高速でSEOを意識したサイト制作が可能です。',
    imageName: 'programming.jpg',
    emoji: '📃',
  },
  {
    title: 'ウェブアプリ開発',
    description:
      'フロントエンド・バックエンドともに開発経験があるため、データベースやAPIを活用したウェブアプリケーションの開発が可能です。',
    imageName: 'programming.jpg',
    emoji: '📱',
  },
  {
    title: '自動化ツール・シナリオ作成',
    description:
      'クラウド・オンプレミス問わず、ソフトウェアを使用するPC上の業務を自動化するためのシナリオ作成とツール開発が可能です。',
    imageName: 'programming.jpg',
    emoji: '🔧',
  },
  {
    title: '業務効率化',
    description:
      '税理士法人に所属し、多くの関与先法人の社内IT環境を検討・改善した経験から、経理・人事労務・請求業務の効率化するためのサービスの選定・導入サポートが可能です。',
    imageName: 'programming.jpg',
    emoji: ' 🐎',
  },
];

export type Indicator = {
  value: number;
  unit: string;
  description: string;
};

export type Product = {
  title: string;
  descriptions: string[];
  images?: { url: string; alt: string }[];
  indicators?: Indicator[];
  link?: string;
  linkLabel?: string;
  additional?: {
    title: string;
    description: string;
  }[];
};

export const products: Product[] = [
  {
    title: 'kula (ウェブアプリ)',
    descriptions: [
      'サイボウズ株式会社の提供している業務改善プラットフォーム「kintone」との連携を想定したウェブアプリを運営しています。',
      'kintoneとは、業務で使用する様々な情報をアプリ単位で管理するプラットフォームです。類似するアプリとしてはMicrosoftのPower AppsやGoogleのAppSheetが近いと思いますが、SFAやCRMとして活用されることも多く、SalesForceやZoho CRMと比較されることもあります。',
      'kulaではこの1アプリをCMSのように捉え、APIを介してデータを取得し、ブログやオウンドメディアを作成することができるサービスです。',
      'バックエンドを伴うウェブアプリを初めて作成しました。Next.jsとFirebaseを使って開発しています。',
    ],
    indicators: [],
    link: 'https://kula.konomi.app',
    linkLabel: 'サイトはこちら',
    images: [{ url: '/img/products/kula-infrastructure.webp', alt: 'システム構成図' }],
    additional: [
      { title: '言語', description: 'TypeScript, Node.js' },
      { title: 'フレームワーク', description: 'React, Next.js' },
      {
        title: 'ツール・サービス',
        description: 'Firebase(認証機能・データベース・ストレージ), Sentry(エラーログ)',
      },
    ],
  },
  {
    title: 'kintoneプラグイン',
    descriptions: [
      'kintoneに用意されているエコシステムの1つとして、プラグインがあります。プラグインの構成はChromeの拡張機能に似ており、HTML、CSS、JavaScriptで構成され、導入することで、kintoneの機能を拡張することができます。',
      '私はオープンソースで10個以上のプラグインを公開しており、導入いただいた法人は2022年5月に600社を超えました。',
    ],
    images: [{ url: '/img/products/plugin-flow.webp', alt: '開発とリリースフロー' }],
    link: 'https://ribbit.konomi.app/kintone-plugin',
    linkLabel: '紹介ページはこちら',
  },
  {
    title: 'ブログ',
    descriptions: [
      '初めてSG(SSG)に触れ、作ったものです。ホスティングはGatsbyCloud(現在はCloudflare Pages)、コンテンツ管理はContentful、プログラムはGithubという構成で作成。閲覧数は最も高い時で4万PV/月です。',
    ],
    images: [{ url: '/img/products/ribbit.konomi.app-flow.webp', alt: 'システム構成図' }],
    link: 'https://ribbit.konomi.app',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'Kokoroe (ブログ)',
    descriptions: [
      'Mozillaが運営するmdn web docsのようなドキュメントサイトを、Metaの開発するDocusaurusを使って作成しました。',
      '構造が異なるだけで、実質はブログです。',
    ],
    link: 'https://kokoroe.konomi.app',
    linkLabel: 'サイトはこちら',
  },

  {
    title: 'ポートフォリオv3(このサイト)',
    descriptions: [
      '訪問者が欲しい情報にたどり着きやすいことを意識して作り直しました。Next.jsで作成、Cloudflare Pagesにデプロイ。',
    ],
    link: 'https://github.com/Local-Bias/portfolio-v3',
    linkLabel: 'GitHub',
  },
  {
    title: 'ポートフォリオv2',
    descriptions: [
      'Next.jsのISRを知って使ってみたくなり、実績を全面的に押し出したサイトにリニューアルしました。 Next.jsで作成、Vercelにデプロイ。',
    ],
    link: 'https://portfolio.v2.konomi.app',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'ポートフォリオv1',
    descriptions: [
      'はじめて作成したポートフォリオサイトです。Gatsby.jsで作成、netlifyにデプロイ。',
    ],
    link: 'https://ribbitlify.netlify.app',
    linkLabel: 'サイトはこちら',
  },
];

export const experiences: { title: string; descriptions: string[] }[] = [
  {
    title: 'チャットボット',
    descriptions: [
      '構成はChatwork × Google Apps Script。 ChatworkのWeb hookをGASで取得して、対応するメッセージをPOSTするという方法で実装していました。',
    ],
  },
  {
    title: 'WEBセミナー',
    descriptions: [
      '税理士法人に在席中は、ITを活用した業務改善を、社内、社外いずれも行っていました。',
      '関与先法人についてはコンサルティング契約を結んでいましたが、その広報の一環として無料のウェブセミナーを定期的に行っており、その中でITを活用した業務効率化をテーマに、中小企業向けのWEBセミナーの講師を担当しました。',
    ],
  },
];

export const careers: { title: string; descriptions: string[] }[] = [
  {
    title: '税理士法人(2019年7月 ～ 現在)',
    descriptions: [
      '「To Do」でもお話していますが、「社員の働き方」という点で以前から労務について関心を持っていました。そんな中、会計・労務・相続など多くの士業法人をかかえるグループ会社の「PCサポート担当」という、願ってもない求人を見つけ入社。',
      '求人内容は所内のハードウェア・ソフトウェアの整備のみを担当してもらうつもりだったそうですが、能力を認めていただき、既存の関与先にITコンサルティングを行う新商品の立ち上げに携わりました。',
      '主な業務として、社内のIT環境構築、関与先法人のIT導入サポート、コンサルティングなどを担当。',
      'プログラミングは趣味として続けていた他、業務においてはクラウドサービスを拡張するためのJavaScript開発、Node.jsを使った日次バッチ処理などを作成していました。',
    ],
  },
  {
    title: 'システム開発会社(2016年10月 ～ 2019年7月)',
    descriptions: [
      '念願叶って、プログラミングを仕事にすることができました。',
      '主にSIerからの2次受け(SES)として、SIerに常駐する形での勤務でした。24時間稼働する工場の、生産管理、出荷管理、勤怠管理システムの開発・保守を主に行っていました。',
      '開発言語はJava, DB2, HTML, CSS, Flex(ブラウザでフラッシュを動作させるための言語)などです。毎日学ぶことばかりでした。',
    ],
  },
  {
    title: '家具・インテリア・雑貨メーカー(2015年8月 ～ 2016年10月)',
    descriptions: [
      '大学を中退した後、友人の紹介で初めて入社した会社です。倉庫で家具の組み立てを行っていました。もともとシステム関係の仕事がしたいと思っていたため、その仕事が見つかるまで、転職活動をしながら働かせてもらっていました。',
    ],
  },
];

export const todoList: { year: number; title: string; descriptions: string[] }[] = [
  {
    year: 2023,
    title: 'ITエンジニアに戻る',
    descriptions: [
      '税務・労務を中心として、且つシステムに触れていられる税理士法人での業務はとても充実しています。',
      'ただ、お客様へITサービスの導入支援を行っている中で、「ここが対応できないなら導入は難しい」との要望から、ITサービスの導入を諦めてしまうことが何度かありました。',
      '「自分が開発すれば解決できるのに」と思ってしまうところがあり、プログラミングも含め可能な限り手を加えていました。',
      '可能な限りではなく、これを本業にしたいという思いが強く、ITエンジニアに戻ることになりました。',
    ],
  },
  {
    year: 2025,
    title: 'SEを担当する',
    descriptions: ['税理士法人で培った上流工程の経験を活かし、SEとして要件定義から設計を行う。'],
  },
  {
    year: 2027,
    title: 'PMを担当する',
    descriptions: [
      'マネジメントの知識を身につけ、PMとしてプロジェクト・プロダクトに責任を持てる立場になる。',
    ],
  },
  {
    year: 2033,
    title: '「貢献したい」と思えるような会社づくりのサポートをしたい',
    descriptions: [
      'スターリン時代のソビエト連邦も、毛沢東時代の中国も、国民の能力が他の国より劣っていたから衰退したわけではありません。',
      '衰退してしまうようなルールの上で全員が最適化したからだと思っています。',
      '「ルール」によるパフォーマンスの影響は規模を問いません。企業であっても同じです。',
      '適切な「ルール」を設定できていない企業は、たとえどんな優秀な社員をかかえていても衰退し、適切な「ルール」を設定できている企業は、社員の能力を問わず成長します。',
      '私は適切な「ルール」の運用をサポートするようなシステム開発に携わりたいと思っています。',
    ],
  },
];
