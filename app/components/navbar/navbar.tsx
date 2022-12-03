import { Flex } from "component/organisms";
import { Box } from "component/atoms";
import { Button } from "component/molecules";
import { Text } from "component/atoms";
import styles from './navBar.module.scss';
import Link from "next/link";

const menuList = [
  {name: 'Registration', path: '/submit-lead'},
  {name: 'Project', path: '/project/direct/the-light-waterfront-penang'},
  {name: 'Lead Validation', path: '/lead-check'},
  {name: 'Market 360', path: '/market-360'},
  {name: 'Leads Bulk Validation', path: '/bundle-lead-check'},
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