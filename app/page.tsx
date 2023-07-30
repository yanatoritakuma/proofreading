import Link from "next/link";
import styled from "@emotion/styled";

export default function Page() {
  return (
    <main className="page">
      <div className="page__box">
        <h1 style={{ margin: "0", textAlign: "center" }}>文章チェックアプリ</h1>
        <h2>説明</h2>
        <p>
          機械学習を用いて、大量の日本語文章データから正しい文章の構成や文法、単語の流れを学習し、異常検知的に誤字脱字を発見するwebアプリです。
          例えば、システムの企画から開発・運用まで幅拾く関われます。といった文章をwebアプリに投げてみてください。助詞の間違いや変換ミスによる間違いを検出してアラートを返してくれます。
        </p>
        <h2>注意</h2>
        <p>
          個人情報について：
          <br />
          他人の名称・メールアドレス・住所・電話番号など個人を特定しうる情報はアップロードしないでください。
          <br />
          推奨ブラウザについて： 本ページはGoogle Chromeを推奨しています。
          <br />
          Google Chrome以外のブラウザでは正しく作動しないケースがあります。
        </p>
        <Link className="page__link" href="/check">
          文章チェック画面へ
        </Link>
      </div>
    </main>
  );
}
