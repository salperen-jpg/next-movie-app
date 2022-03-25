import React from 'react';
import styles from '../styles/Navbar.module.scss';
import { MdMovie, MdOutlineSubscriptions } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navcenter}>
        <h3>
          HO<span className={styles.letter}>LA</span>
        </h3>
        <div className={styles.rightnav}>
          <ul className={styles.navlinks}>
            <li>
              <MdMovie className={styles.animation}></MdMovie>
            </li>
            <li>
              <CgProfile></CgProfile>
            </li>
            <li>
              <MdOutlineSubscriptions></MdOutlineSubscriptions>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
