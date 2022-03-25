import React from 'react';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navcenter}>
        <h3>
          HOLA<span>AA</span>
        </h3>
        <div className={styles.rightnav}>
          <ul className={styles.navlinks}>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
