import { Flex } from "component/organisms";
import styles from './navBar.module.scss';
import Link from "next/link";

const menuList = [
  {name: 'Market 360', path: 'http://osg-nvidia-dgx1.guruestate.com:8111/Map.html'},
  {name: 'Submission Form', path: '/submit-lead'},
  {name: 'Lead 360', path: '/project/parc-clematis'},
  {name: 'Lead Qualification', path: '/lead/search'},
  {name: 'Consume Anywhere', path: '/consume-everyway'},
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