import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  );

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.overlay}></div>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link to="/">
            {data.site.siteMetadata.title}
            <span className={headerStyles.rights}>®</span>
          </Link>
        </p>
        <p className={headerStyles.description}>
          {data.site.siteMetadata.description}
        </p>
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/specialty-ingredients/"
              activeClassName={headerStyles.activeMenuItem}
            >
              Specialty Ingredients
            </Link>
          </li>
          <li>
            <Link
              to="/co-packing/"
              activeClassName={headerStyles.activeMenuItem}
            >
              Co-packing
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/careers/" activeClassName={headerStyles.activeMenuItem}>
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
