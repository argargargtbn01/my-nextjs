export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <header>header</header>
          {children}</body>
          <footer>footer</footer>
      </html>
    )
  }