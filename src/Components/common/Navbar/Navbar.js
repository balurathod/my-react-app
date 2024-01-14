import React from 'react'
import PropTypes from 'prop-types'
import { menuItemsData } from './menuItemsData';

/**
* @author
* @function 

**/

export default function Navbar(props) {
  return(
    // <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle border border-primary-subtle rounded-3">
    //     <div className="container-fluid">
    //     <a className="navbar-brand" href="/">{props.title}</a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //               {props.service}
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //               {props.entryForm}
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //               {props.aboutText}
    //             </a>
    //           </li>

    //           {/* <li className="nav-item dropdown">
    //             <a
    //               className="nav-link dropdown-toggle"
    //               href="/"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Dropdown
    //             </a>                
    //           </li>               */}
    //         </ul>
    //         <form className="d-flex" role="search">
    //           <input
    //             className="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>

      <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
   )

 }

 Navbar.propTypes = {title: PropTypes.string, aboutText: PropTypes.string}

 //Navbar.defaultProps = {title: "TextUtils here", aboutText: "About Text here"}

