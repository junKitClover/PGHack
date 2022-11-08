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
      <head></head>
      <body className={styles.body}>
        <Header />
        <Grid col={[1, "1by6"]} gap={3}>
          <SideBar />
          {children}
        </Grid>
        <Footer />
      </body>
    </html>
  );
}
