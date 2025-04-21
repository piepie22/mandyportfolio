import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} offset={-50}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
