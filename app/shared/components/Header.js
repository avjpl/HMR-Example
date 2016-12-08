import React from 'react';
import {Link} from 'react-router';

const Header = ({ data }) => (
  <div className="row">
    <div className="medium-12 columns">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
);

export default Header;
