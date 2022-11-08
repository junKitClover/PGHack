import Image from "next/image";
import { ReactElement } from "react";
import { Flex } from "component/organisms";
import { Text } from "component/atoms";
import styles from "./header.module.scss";

const Header = (): ReactElement => {
  return (
    <Flex
      alignItem="center"
      gap={3}
      paddingBlock={[2, 3]}
      paddingInline={[2, 4, 6]}
      className={styles.header}
    >
      <Image alt="headerLogo" width={120} height={60} src="/propertyguru.svg" />
      <Text>Home</Text>
    </Flex>
  );
};

export default Header;
