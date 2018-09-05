import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Sections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Period 1: Living Environment 02
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Period 2: Living Environment 04
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Period 3: Living Environment 05
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Period 4: Living Environment 09
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Period 5: Living Environment 12
                </a>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Archive</span>
              <a className="d-flex align-items-center text-muted" href="#" />
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  2017-2018
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  2016-2017
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
