"use client";

import { useState } from "react";

export type TResText = {
  alerts: {
    pos: number;
    score: number;
    suggestions: string[];
    word: string;
  }[];
  checkedSentence: string;
  inputSentence: string;
  message: string;
  normalizedSentence: string;
  resultID: string;
  status: number;
};

export default function InputText() {
  const [sarchText, setSarchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resText, setResText] = useState<TResText>();
  console.log(resText);

  const submitHandler = async (text: string) => {
    setIsLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(
      `https://api.a3rt.recruit.co.jp/proofreading/v2/typo?apikey=${process.env.NEXT_PUBLIC_API_URL}&sentence=${text}`,
      {
        cache: "no-store",
        // next: { revalidate: 10 },
      }
    );
    if (!res.ok) {
      alert("エラー。文字数が多過ぎかもしれません。");
    }
    const resText = await res.json();
    setResText(resText);
    setIsLoading(false);
  };

  return (
    <div className="inputTextBox">
      <textarea
        className="inputTextBox__textArea"
        value={sarchText}
        onChange={(e) => setSarchText(e.target.value)}
        rows={5}
      />
      <button
        className="inputTextBox__btn"
        onClick={() =>
          sarchText !== ""
            ? submitHandler(sarchText)
            : alert("1文字以上入力してください。")
        }
      >
        添削する
      </button>
      <p>
        間違えているかもしれない箇所は&lt;&lt;指摘文字&gt;&gt;のようにカッコで囲まれています。
      </p>

      <p>
        例<br />
        明日&lt;&lt;わ&gt;&gt;、晴れです。
      </p>
      {isLoading ? (
        <p>添削中...</p>
      ) : (
        resText !== undefined && (
          <>
            <h3>入力した文章</h3>
            <p>{resText?.checkedSentence}</p>
            <div>
              {resText?.alerts?.map((alert, index) => (
                <div className="wrongPartBox" key={index}>
                  <h4>間違えているかも？</h4>
                  <p>{alert.word}</p>
                  <h4>修正候補</h4>
                  {alert.suggestions.map((suggestion: any, index: number) => (
                    <p key={index}>{suggestion}</p>
                  ))}
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
