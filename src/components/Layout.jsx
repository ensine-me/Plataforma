import React from 'react'
import SideBar from "../components/SideBar";
import styles from '../style/Layout.module.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className={styles.layout_container}>
                <SideBar />
                <div className={styles.layout_content_container}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout