import React, { Component } from 'react';
import "../../assets/styles/modal.css"; 
class Calendar extends Component {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    this.state = {
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    };
  }
  renderCalendar() {
    const { month, year } = this.state;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];
  
    // Create an array of day numbers for the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
  
    // Create an array of empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.unshift(null);
    }
  
    // Calculate the number of rows needed in the calendar grid
    const numRows = Math.ceil((days.length + firstDayOfMonth) / 7);
  
    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th colSpan="7">{`${this.getMonthName(month)} ${year}`}</th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const dayNumber = days[rowIndex * 7 + dayIndex];
                return (
                  <td key={dayIndex} className="calendar-day">
                    {dayNumber !== null ? (
                      <>
                        <div className="day-number">{dayNumber}</div>
                        <div className="tasks">
                         <p>Task List</p>
                        </div>
                      </>
                    ) : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  getMonthName(month) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[month];
  }

  goToPreviousMonth = () => {
    this.setState(prevState => {
      const prevMonth = prevState.month === 0 ? 11 : prevState.month - 1;
      const prevYear = prevState.month === 0 ? prevState.year - 1 : prevState.year;
      return {
        month: prevMonth,
        year: prevYear,
      };
    });
  }

  goToNextMonth = () => {
    this.setState(prevState => {
      const nextMonth = prevState.month === 11 ? 0 : prevState.month + 1;
      const nextYear = prevState.month === 11 ? prevState.year + 1 : prevState.year;
      return {
        month: nextMonth,
        year: nextYear,
      };
    });
  }

  render() {
    return (
      <div>
        <button className = "fancy-button" onClick={this.goToPreviousMonth}>Previous Month</button>
        <button className = "fancy-button" onClick={this.goToNextMonth}>Next Month</button>
        {this.renderCalendar()}
      </div>
    );
  }
}

export default Calendar;
