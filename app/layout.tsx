import Header from "./header";
import { Flex, Grid, Stack } from "component/organisms";
import Footer from "./footer";
import SideBar from "./sideBar";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
