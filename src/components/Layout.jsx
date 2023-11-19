import React from 'react'
import SideBar from "../components/SideBar";
import styles from '../assets/styles/Layout.module.css'
import { Outlet } from 'react-router-dom';
import { useTheme } from '../functions/ThemeContext';

const Layout = ({ children }) => {
    const { theme } = useTheme();
    return (
        <>
            <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
                {children}
                <div className={styles.layout_container}>
                    <SideBar />
                    <div className={styles.layout_content_container}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout