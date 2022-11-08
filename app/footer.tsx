import Image from "next/image";
import { ReactElement } from "react";
import { Box, Text } from "component/atoms";

const Footer = (): ReactElement => {
  return (<Box backgroundColor="greyDarker" paddingBlock={10} paddingInline={6}><Text color="white">this is a footer</Text></Box>)
}

export default Footer;

