import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className={styles.body}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
