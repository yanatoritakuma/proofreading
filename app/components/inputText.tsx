"use client";

import { useState } from "react";

export default function InputText(todo: any) {
  console.log("todo", todo);

  const [sarchText, setSarchText] = useState("");
  const [resText, setResText] = useState<any>();
  console.log(resText);

  const submitHandler = async (text: string) => {
    const res = await fetch(
      `https://api.a3rt.recruit.co.jp/proofreading/v2/typo?apikey=${process.env.NEXT_PUBLIC_API_URL}&sentence=${text}`,
      {
        cache: "no-store",
        // next: { revalidate: 10 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data in server");
    }
    const resText = await res.json();
    setResText(resText);
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
      <h4>入力した文章</h4>
      <p>{resText?.inputSentence}</p>
      <div>
        {resText?.alerts.map((alert: any, index: number) => (
          <div key={index}>
            <h4>間違えている箇所</h4>
            <p>{alert.word}</p>
            <h4>候補</h4>
            {alert.suggestions.map((suggestion: any, index: number) => (
              <p key={index}>{suggestion}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
