"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Мармеладыч</title>
      </head>
      <body>
        <div className="max_container">{children}</div>
      </body>
    </html>
  );
}
