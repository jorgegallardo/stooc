import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.students = [
      {
        name: 'Tom Petty',
        contactInfo: '[Home] 123-456-7890',
        courses: [
          { period: 1, title: 'Earth Science', minMissed: 22 },
          { period: 2, title: 'Algebra 2', minMissed: 22 },
          { period: 3, title: 'Global', minMissed: 22 },
          { period: 4, title: 'English 10', minMissed: 22 }
        ]
      },
      {
        name: 'Bob Dylan',
        contactInfo: '[Home] 222-222-7890',
        courses: [
          { period: 1, title: 'Algebra 2', minMissed: 33 },
          { period: 2, title: 'Global', minMissed: 33 },
          { period: 3, title: 'Earth Science', minMissed: 33 },
          { period: 4, title: 'English 10', minMissed: 33 }
        ]
      }
    ];
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Out Of Your Class This Year</th>
              <th>Today (Before Your Class)</th>
              <th>Yesterday's Totals</th>
            </tr>
          </thead>

          {this.students.map((student, index) => {
            return (
              <tbody>
                {/* Warning: Each child in an array or iterator should have a unique "key" prop. Don't use index? */}
                <tr
                  key={index}
                  data-toggle="collapse"
                  data-target={`#demo${index + 1}`}
                  className="accordion-toggle"
                >
                  <td>{student.name}</td>
                  <td>4 min</td>
                  <td>2 min</td>
                  <td>0 min</td>
                </tr>

                <tr>
                  <td colSpan="6" className="hiddenRow">
                    <div
                      className="accordian-body collapse"
                      id={`demo${index + 1}`}
                    >
                      <h1>{student.name}</h1>
                      <h6>Contact: {student.contactInfo}</h6>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Period</th>
                            <th>Subject</th>
                            <th>Class Missed This Year</th>
                          </tr>
                        </thead>
                        {/* iterate through periods and create tbody + tr */}
                        {student.courses.map(section => {
                          return (
                            <tbody>
                              <tr>
                                <td>{section.period}</td>
                                <td>{section.title}</td>
                                <td>{section.minMissed} mins</td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Table;
