import Header from './header';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
