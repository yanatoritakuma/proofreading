"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__link" href="/">
          ホーム
        </Link>
        <Link className="header__link" href="/check">
          チェック画面
        </Link>
      </nav>
    </header>
  );
}
