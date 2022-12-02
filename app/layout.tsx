import Header from "./components/header/header";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head><meta content="width=device-width, initial-scale=1" name="viewport" /></head>
      <body className={styles.body}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
