import { Flex, Stack } from "component/organisms";
import styles from "./page.modules.scss";

const Page = () => {
  return(<Flex alignItem='center' justifyContent="center" className={styles.fullSize}>this is a bulk page</Flex>);
};

export default Page;