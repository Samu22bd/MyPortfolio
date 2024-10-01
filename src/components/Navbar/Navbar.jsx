import React, { useState } from 'react';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    //biar navbarnya ketutup

    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Samuel
        </a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')} 
                alt="navbtn" 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                // onClick={() => setMenuOpen(!menuOpen)}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Experience">Experience</a>
                </li>
                <li>
                    <a href="#Projects">Projects</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};