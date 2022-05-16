export type Skill = {
  name: string;
  description: string;
  children?: Skill[];
};

export const skills: Skill[] = [
  {
    name: '言語',
    description: '',
    children: [
      {
        name: 'TypeScript',
        description: '1日で触れている時間が最も長いのがこの言語です。',
        children: [
          { name: 'React', description: '' },
          { name: 'Next.js', description: '' },
          { name: 'Gatsby.js', description: '現在も更新中のブログは、Gatsby.jsで作成しました。' },
        ],
      },
      { name: 'JavaScript', description: 'TypeScriptが使えるのであれば、TypeScriptを使います。' },
      { name: 'Node.js', description: '開発環境' },
      {
        name: 'Java',
        description: '前職であるシステム開発会社に勤務していた際、主に使用していた言語です。',
      },
      {
        name: 'HTML',
        description: '',
        children: [{ name: 'Pug', description: '' }],
      },
      {
        name: 'CSS',
        description: '',
        children: [
          { name: 'SCSS', description: '' },
          { name: 'Sass', description: '' },
        ],
      },
      { name: 'VBA', description: '' },
    ],
  },
  {
    name: 'データベース',
    description: '',
    children: [
      { name: 'db2', description: '前職でJavaと併せて、バックエンド開発に使用していました。' },
    ],
  },
  {
    name: 'ツール',
    description: '',
    children: [
      { name: 'VSCode', description: '' },
      { name: 'Docker', description: '' },
      { name: 'Git', description: '' },
      { name: 'Firebase', description: '' },
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
  img?: string;
  indicators?: Indicator[];
  link?: string;
  linkLabel?: string;
};

export const products: Product[] = [
  {
    title: 'kula (ウェブアプリ)',
    descriptions: [
      '株式会社サイボウズの提供している業務改善プラットフォーム「kintone」との連携を想定したウェブアプリを運営しています。',
      'kintoneとは、業務で使用する様々な情報をアプリ単位で管理するプラットフォームです。類似するアプリとしてはMicrosoftのPower AppsやGoogleのAppSheetが近いと思いますが、SFAやCRMとして活用されることも多く、SalesForceやZoho CRMと比較されることもあります。',
      'kulaではこの1アプリをCMSのように捉え、APIを介してデータを取得し、ブログやオウンドメディアを作成することができるサービスです。',
      'バックエンドを伴うウェブアプリを初めて作成しました。Next.jsとFirebaseを使って開発しています。',
    ],
    indicators: [],
    link: 'https://kula.konomi.app',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'kintoneプラグイン',
    descriptions: [
      'kintoneに用意されているエコシステムの1つとして、プラグインがあります。プラグインの構成はChromeの拡張機能に似ており、HTML、CSS、JavaScriptで構成され、導入することで、kintoneの機能を拡張することができます。',
      '私はオープンソースで10個以上のプラグインを公開しており、導入いただいた法人は2022年5月に600社を超えました。',
    ],
    link: 'https://ribbit.konomi.app/kintone-plugin',
    linkLabel: '紹介ページはこちら',
  },
  {
    title: 'ブログ',
    descriptions: [
      'ホスティングはGatsbyCloud、コンテンツ管理はContentful、プログラムはGithubという構成で作成。月の閲覧数は5,000程です。',
    ],
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
      'Next.jsでポートフォリオを作り直しました。訪問者が欲しい情報にたどり着きやすいことを意識して作成しました。',
    ],
    link: 'https://github.com/Local-Bias/portfolio-v3',
    linkLabel: 'GitHub',
  },
  {
    title: 'ポートフォリオv2',
    descriptions: [
      '以前はGatsby.jsで作成していましたが、デザインを一新するタイミングでNext.jsに変更しました。 デプロイはVercelです。',
    ],
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
    title: '家具・インテリア・雑貨メーカー(2015年8月 ～ 2016年10月)',
    descriptions: [
      '大学を中退した後、友人の紹介で初めて入社した会社です。倉庫で家具の組み立てを行っていました。もともとシステム関係の仕事がしたいと思っていたため、その仕事が見つかるまで、転職活動をしながら働かせてもらっていました。',
    ],
  },
  {
    title: 'システム開発会社(2016年10月 ～ 2019年7月)',
    descriptions: [
      '主にSIerとして、客先常駐での勤務でした。法人向けの業務システムの開発を主に行っていました。',
      '開発言語はJava, DB2, HTML, CSS, Flexなどです。',
    ],
  },
  {
    title: '税理士法人(2019年7月 ～ 現在)',
    descriptions: [
      '「To Do」でもお話していますが、「社員の働き方」という点で以前から労務について関心を持っていました。そんな中、会計・労務・相続など多くの士業法人をかかえるグループ会社の「PCサポート担当」という、おあつらえ向きな求人を見つけ入社。',
      '求人内容は所内のハードウェア・ソフトウェアの整備のみを担当してもらうつもりだったそうですが、能力を認めていただき、既存の関与先にITコンサルティングを行う新商品の立ち上げに携わりました。',
      '主な業務として、社内のIT環境構築、関与先法人のIT導入サポート、コンサルティングなどを担当。',
    ],
  },
];

export const todoList: { title: string; descriptions: string[] }[] = [
  {
    title: '「働きたい」と思えるような会社づくりのサポートをしたい',
    descriptions: [
      'スターリン時代の旧ソ連も、毛沢東時代の中国も、国民が無能だったから衰退したわけではありません。',
      '共産主義という国の「ルール」に綻びがあったからこそ衰退をまねいたのだと考えています。',
      '「ルール」によるパフォーマンスの影響は規模を問いません。企業であっても同じです。',
      '適切な「ルール」を設定できていない企業は、たとえどんな優秀な社員をかかえていても衰退し、適切な「ルール」を設定できている企業は、社員の能力を問わず成長します。',
      '私は適切な「ルール」の運用をサポートするようなシステム開発に携わりたいと思っています。',
    ],
  },
];
