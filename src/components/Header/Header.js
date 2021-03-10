/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { Link, withPrefix } from 'gatsby';
import { jsx } from 'theme-ui';
import { Waypoint } from 'react-waypoint';
import styles from './Header.module.css';
import classnames from 'classnames';
import SearchButton from '/src/components/SearchButton/SearchButton';
import Social from '/src/components/Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import JSONData from '../../data/menu.json';

import logo from '../../assets/images/taketwologo_2.png';

const Header = ({ pathname }) => {
  const [bgColor, setBgColor] = useState('');
  const [menuState, setMenuState] = useState(false);
  const [current, setCurrent] = useState(null);
  const [hasInitBg, setHasInitBg] = useState(false);
  useEffect(() => {
    setHasInitBg(pathname !== withPrefix('/'));
    setBgColor(pathname === withPrefix('/') ? '' : 'primary');
  }, [pathname]);
  return (
    <>
      {!hasInitBg && <Waypoint onEnter={() => setBgColor('')} onLeave={() => setBgColor('primary')} />}
      <header
        className={styles.header}
        sx={{
          height: !hasInitBg ? 0 : 'headerHeight',
        }}
      >
        <div
          className={styles.wrapper}
          sx={{ bg: bgColor, boxShadow: bgColor ? '0 12px 14px 0 rgb(0 0 0 / 10%)' : '' }}
        >
          <div
            className={styles.innerWrapper}
            sx={{
              maxWidth: 'maxWidth',
              height: 'headerHeight',
              px: 4,
              color: 'text',
            }}
          >
            <Link sx={{ color: 'text', mr: 'auto' }} to='/'>
              <img className={styles.logo} src={logo} alt='logo' sx={{ height: 'headerHeight' }} />
            </Link>
            <SearchButton />
            <div className={styles.menuBtn} onClick={() => setMenuState(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </header>
      <div
        className={classnames(styles.menu, menuState ? styles.showMenu : '')}
        sx={{ bg: 'primary', color: 'text', p: [4, 0] }}
      >
        <div className={styles.menuWrapper} sx={{ maxWidth: 'maxWidth', flexDirection: ['column', 'row'] }}>
          <ul className={styles.mainMenu} sx={{ width: ['auto', '40%'], fontSize: ['32px', '40px'] }}>
            {JSONData.map((item, index) => (
              <li key={index} onMouseEnter={() => setCurrent(index)}>
                <Link sx={{ color: 'text' }} to={item.path} onClick={() => setMenuState(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.subMenu} sx={{ display: ['none', 'block'] }}>
            {JSONData[current]?.children.length
              ? JSONData[current]?.children.map((item, index) => (
                  <li key={index}>
                    <Link sx={{ color: 'text' }} to={item.path} onClick={() => setMenuState(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
          <ul className={styles.contact}>
            <li>
              <Link sx={{ color: 'text' }} to='/'>
                加入我們
              </Link>
            </li>
            <li>
              <Link sx={{ color: 'text' }} to='/'>
                聯絡我們
              </Link>
            </li>
            <li>
              <Social />
            </li>
          </ul>
        </div>
        <div className={styles.closeBtn} onClick={() => setMenuState(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    </>
  );
};

export default Header;
