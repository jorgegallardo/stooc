import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.classesTaught = [
      { period: 1, title: 'Living Environment', section: 2 },
      { period: 2, title: 'Living Environment', section: 4 },
      { period: 3, title: 'Living Environment', section: 6 },
      { period: 4, title: 'Living Environment', section: 8 },
      { period: 5, title: 'Living Environment', section: 10 }
    ];
  }
  render() {
    return (
      <div>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              {this.classesTaught.map(course => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Period {course.period}: {course.title} {course.section}
                    </a>
                  </li>
                );
              })}
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
