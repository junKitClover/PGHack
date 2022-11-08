import Image from "next/image";
import { ReactElement } from "react";
import { Flex } from "component/organisms";
import { Text } from "component/atoms";

const Header = (): ReactElement => {
  return (<Flex alignItem="center" gap={3}><Image alt="headerLogo" width={120} height={60} src="/propertyguru.svg"/>
  <Text>Home</Text>
  </Flex>)
}

export default Header;

