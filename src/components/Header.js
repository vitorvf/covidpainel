import React from 'react';
import styles from './Header.module.css';
const Header = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: '#181818' }}
        className="navbar navbar-light "
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white">Covid19</a>

          <div>
            <a href="" className={styles.textWhite}>
              Codigo de fonte
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
