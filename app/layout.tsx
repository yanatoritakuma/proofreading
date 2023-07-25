import "@/app/style/style.css";
import Header from "@/app/components/header";

export const metadata = {
  title: "proofreading",
  description: "check the text",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
