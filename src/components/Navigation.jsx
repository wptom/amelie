import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from "../context/DataContext.jsx";
import { Link } from 'react-router-dom';

function Navigation() {
  const data = useContext(DataContext);

  let [classNameMenu, setClassNameMenu] = useState('');
  let [classNameSubmenu, setClassNameSubmenu] = useState('');

  if (!data.menu) return false;

  const toggleMenu = () => {
    if (getViewportWidth() < 992) {
      setClassNameMenu(classNameMenu === ''
        ? ' nav--is-visible'
        : '');
    } else {
      setClassNameMenu(classNameMenu = '');
      setClassNameSubmenu(classNameSubmenu = '');
    }
  };

  const toggleSubMenu = () => {
    setClassNameSubmenu(classNameSubmenu === '' ? ' nav__list__item--submenu-is-visible' : '');
  };

  const showSubmenu = () => {
    setClassNameSubmenu(classNameSubmenu = ' nav__list__item--submenu-is-visible');
  }

  const hideSubmenu = () => {
    setClassNameSubmenu(classNameSubmenu = '');
  }

  const getViewportWidth = () => {
    return window.innerWidth;
  }

  return (
    <>
      <nav className={'nav' + classNameMenu}>
        <ul className={'nav__list'}>
          {data.menu.map((item) => {
            let itemHtml;

            if (item.isAnchor) {
              itemHtml = (
                <li className={'nav__list__item'} key={uuidv4()}>
                  <a href={item.link} className={'nav__list__item__link'} onClick={toggleMenu}>{item.text}</a>
                </li>
              )
            } else {
              if (item.hasSubmenu) {
                itemHtml = (
                  <li className={'nav__list__item nav__list__item--has-submenu' + classNameSubmenu} onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu} key={uuidv4()}>
                    <Link className={'nav__list__item__link'} onClick={toggleSubMenu}>{item.text}</Link>
                    <span onClick={toggleSubMenu} className={'nav__list__item__btn'}>Toggle submenu</span>
                    <ul className={'nav__list__submenu'}>
                      {item.submenu.map((subItem) => {
                        return (
                          <li className={'nav__list__item'} key={uuidv4()}>
                            <Link to={subItem.link} className={'nav__list__item__link'} onClick={toggleMenu}>{subItem.text}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              } else {
                itemHtml = (
                  <li className={'nav__list__item'} key={uuidv4()}>
                    <Link to={item.link} className={'nav__list__item__link'} onClick={toggleMenu}>{item.text}</Link>
                  </li>
                )
              }
            }
            return (
              itemHtml
            )
          })}
        </ul>
      </nav>
      <button id='toggle-menu' className={'toggle-menu'} onClick={toggleMenu}>Toggle Menu</button>
    </>
  );
}

export default Navigation;
