import { Flex } from "component/organisms";
import { Box } from "component/atoms";
import { Button } from "component/molecules";
import { Text } from "component/atoms";
import styles from './navBar.module.scss';
import Link from "next/link";

const menuList = [
  {name: 'Project', path: '/project/direct/the-light-waterfront-penang'},
  {name: 'Lead Validation', path: 'http://osg-nvidia-dgx1.guruestate.com:8111/Home.html'},
  {name: 'Market 360', path: 'http://osg-nvidia-dgx1.guruestate.com:8111/Map.html'},
  {name: 'Bulk Validation Leads', path: 'http://osg-nvidia-dgx1.guruestate.com:8111/BulkUpload.html'},
]

const NavBar = () => (
  <Flex gap={2} alignItem="center" className={styles.navList}>
    {menuList.map(({name, path}, index) => (
      <Link key={index} href={path} className={styles.button}>
        {name}
      </Link>
    ))}
  </Flex>
);

export default NavBar;