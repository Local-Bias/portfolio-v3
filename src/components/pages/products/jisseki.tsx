import React, { FC } from 'react';
import { useIndicatorContext } from 'src/components/providers/indicator';

const Component: FC = () => {
  const { indicator } = useIndicatorContext();

  return (
    <section>
      <h2>実績について</h2>
      <h3>概要</h3>
      <ul>
        <li>
          kula (ウェブアプリケーション)
          <ul>
            <li>サイボウズの提供するkintoneの連携サービスです。</li>
            <li>Next.js Firebaseを使用しています。</li>
          </ul>
        </li>
        <li>
          kintoneプラグイン
          {!!indicator && (
            <ul>
              <li>{indicator.numUsers.toLocaleString()}社にご利用いただいています。</li>
              <li>総実行回数は{indicator.counter.toLocaleString()}回です</li>
              <li>主にReactを使って開発しています。</li>
            </ul>
          )}
        </li>
        <li>
          ブログメディア
          <ul>
            <li>Gatsby.jsを使って開発しました。</li>
          </ul>
        </li>
        <li>
          WEBセミナーの講師
          <ul>
            <li>
              在席していた税理士法人の主催で、ITを活用した業務効率化をテーマに、中小企業向けWEBセミナーの講師を担当しました。
            </li>
          </ul>
        </li>
      </ul>
      <section>
        <h3>kula (ウェブアプリケーション)</h3>
      </section>
      <section>
        <h3>kintoneプラグイン</h3>
        <p>
          株式会社サイボウズの提供するクラウドサービスである
          <a target='_blank' rel='nofollow noopener noreferrer'>
            kintone
          </a>
          の拡張機能である、kintoneプラグインをオープンソースで開発しています。
        </p>
        {!!indicator && (
          <p>
            これまでに、{indicator?.numUsers.toLocaleString()}社にご利用いただき、総実行回数は
            {indicator?.counter.toLocaleString()}
            回になりました。
          </p>
        )}
        {!indicator && (
          <p>
            本来ここでリアルタイムの実績を取得し表示するはずでしたが、エラーが発生し利用者数、総実行回数は表示できませんでした。
          </p>
        )}
      </section>
    </section>
  );
};

export default Component;
