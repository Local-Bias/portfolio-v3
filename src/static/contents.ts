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
  description: string;
  indicators?: Indicator[];
  link?: string;
  linkLabel?: string;
};

export const products: Product[] = [
  {
    title: 'ウェブアプリ kula',
    description:
      '株式会社サイボウズの提供しているクラウドサービス「kintone」との連携を想定したウェブアプリを運営しています。Next.jsとFirebaseを使って開発しました。',
    indicators: [],
    link: 'https://kula.konomi.app',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'このサイト',
    description:
      '以前はGatsby.jsで作成していましたが、デザインを一新するタイミングでNext.jsに変更しました。 デプロイはVercelです。',
    indicators: [
      {
        value: 97,
        unit: '/100点',
        description: 'Google PageSpeed Insightsで計測したモバイル版のサイトパフォーマンス',
      },
    ],
  },
  {
    title: 'Kintoneプラグイン',
    description:
      '株式会社サイボウズの提供しているクラウドサービス「Kintone」で利用可能なプラグインを開発しています。導入実績は2022年4月に500社を超えました。',
    indicators: [
      { value: 233, unit: '社', description: 'ご利用いただいた企業数' },
      { value: 342119, unit: '回', description: 'プラグインが実行された回数' },
    ],
  },
  {
    title: 'ブログ',
    description:
      'ホスティングはGatsbyCloud、コンテンツ管理はContentful、プログラムはGithubという構成で作成。月の閲覧数は5,000程です。',
    indicators: [
      { value: 82, unit: '記事', description: '掲載している記事の数' },
      { value: 5200, unit: 'view/月', description: '月あたりの閲覧数' },
    ],
    link: 'https://ribbit.konomi.app',
    linkLabel: 'サイトはこちら',
  },
  {
    title: 'チャットボット',
    description:
      '構成はChatwork × Google Apps Script。 ChatworkのWeb hookをGASで取得して、対応するメッセージをPOSTするという方法で実装していました。',
  },
  {
    title: 'WEBセミナー',
    description:
      'ITを活用した業務効率化をテーマに、中小企業向けのWEBセミナーの講師を担当しました。',
  },
  {
    title: '旧ポートフォリオ',
    description:
      'このサイトを作成する前のポートフォリオサイトです。Gatsby.jsで作成、GitHubでリポジトリ管理、netlifyでデプロイを行いました。',
    link: 'https://ribbitlify.netlify.app',
    linkLabel: 'サイトはこちら',
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
    descriptions: ['社内のIT環境構築、関与先のITサポートおよびコンサルティングを担当'],
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
