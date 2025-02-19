export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor: 'black',
          padding: "1rem",
          color: "white"
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{
          backgroundColor: 'blue',
          padding: "1rem",
          color: "white"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
