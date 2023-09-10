import React from 'react'
import SideBar from "../components/SideBar";
import Search from "../components/Search";
import styles from '../styles/Layout.module.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div className={styles.layout_container}>
        <SideBar />
        <div className={styles.layout_search_box_container}>
            <Search />
        </div>
        <div className={styles.layout_content_container}>
            <Outlet />
        </div>
    </div>
    </>
  )
}

export default Layout