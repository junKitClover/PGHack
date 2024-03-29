import { ReactElement } from "react";
import { Text } from "component/atoms";
import { Flex } from "component/organisms";

const Footer = (): ReactElement => {
  return (
    <Flex backgroundColor="greyLighter" paddingBlock={10} paddingInline={6} justifyContent="center" alignItem="center">
      <Text color="greyLighter" size="small">Property Guru Hackathon 2022</Text>
    </Flex>
  );
};

export default Footer;
