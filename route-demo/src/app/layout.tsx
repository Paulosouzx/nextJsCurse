import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    //for child routes that don't specify their own title
    default: '',
    //Add prefixes or sufixes on title, use %s
    template: '',
    absolute: '',
  }
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
