import React from 'react';
import logo from '../logo.svg';
import { Link } from '@reach/router';

import './Header.css';

const Header = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} className='d-inline-block app-logo' alt='logo' />{' '}
          Company name
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='increment'>
                Increment
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link disabled'
                href='#'
                tabIndex='-1'
                aria-disabled='true'
              >
                Disabled
              </a>
            </li>
            <li className='nav-item text-nowrap'>
              <a className='nav-link' href='#'>
                Sign out
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2 form-control-dark'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* <nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>
          <img src={logo} className='d-inline-block app-logo' alt='logo' />{' '}
          Company name
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <form action='' className='form-inline'>
          <input
            className='form-control form-control-dark w-100'
            type='text'
            placeholder='Search'
            aria-label='Search'
          />
        </form>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav px-3'>
            <li className='nav-item text-nowrap'>
              <Link className='nav-link' to='increment'>
                Increment
              </Link>
            </li>
            <li className='nav-item text-nowrap'>
              <a className='nav-link' href='#'>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
