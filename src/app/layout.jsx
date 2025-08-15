"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Мармеладыч</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="preload" as="image" href="/media/bg.png" />
        <link rel="preload" as="image" href="/media/bg2.png" />
        <link rel="preload" as="image" href="/media/photo-1.png" />
        <link rel="preload" as="image" href="/media/photo-2.png" />
        <link rel="preload" as="image" href="/media/photo-3.png" />
        <link rel="preload" as="image" href="/media/photo-4.png" />
        <link rel="preload" as="image" href="/media/photo-5.png" />
        <link rel="preload" as="image" href="/media/photo-6.png" />
        <link rel="preload" as="image" href="/media/photo-7.png" />
        <link rel="preload" as="image" href="/media/photo-8.png" />
      </head>
      <body>
        <div className="max_container">{children}</div>
      </body>
    </html>
  );
}
