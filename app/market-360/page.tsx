'use client';
import { useEffect, SyntheticEvent } from 'react';
import styles from './page.module.scss';

function Page() {
  const onIframeLoad = (event: SyntheticEvent<HTMLIFrameElement, Event>) => {
    event.preventDefault();
    console.log('on loading');
    const nav = document.getElementById('navbar');
    console.log('nav => ', nav);
  }

  return (
    <iframe src="http://osg-nvidia-dgx1.guruestate.com:8111/Map.html" title="Market 360" className={styles.iframeMap} onLoad={onIframeLoad}/>
  );
}

export default Page;
