"use client"

import Header from "./components/header/header";
import styles from "./layout.module.scss";
import { SHOW_MENU } from "state/headerState";
import { useAtom } from "jotai";
import { Visible, Text } from "component/atoms";
import { Flex } from "component/organisms";
import { Button } from "component/molecules";
import Link from "next/link";

const menuList = [
  {name: 'Market 360', path: '/market-360'},
  {name: 'Lead 360', path: '/project/parc-clematis'},
  {name: 'Lead Qualification', path: '/lead/search'},
  {name: 'Consume Anywhere', path: '/consume-everyway'},
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMainMenu, setShowMainMenu] = useAtom(SHOW_MENU);
  return (
    <html>
      <head><meta content="width=device-width, initial-scale=1" name="viewport" /></head>
      <body className={styles.body}>
        <Header />
        <Visible visible={[showMainMenu, false]} isAutoWidth={false}>
          <Flex justifyContent="center" alignItem="center" gap={10} paddingBlock={20} direction="column" className={styles.mobileWidth}>
            {
              <>
                {menuList.map(({name, path}, index)=>(
                  <Link href={path} key={index} className={styles.link} onClick={()=>setShowMainMenu(false)}>
                    <Text color="primary">{name}</Text>
                  </Link>
                ))}
                <Button iconName="close" isFloat type="outline" onClick={()=>setShowMainMenu(false)}/>
              </>
            }
          </Flex>
        </Visible>
        {!showMainMenu && 
          <div className={styles.content}>
            {children}
          </div>
        }
      </body>
    </html>
  );
}
