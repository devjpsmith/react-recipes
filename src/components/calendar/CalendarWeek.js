import '../css/calendar.css';
import React from 'react';

const CalendarWeek = ({ firstDay, lastDay, month, year }) => {
    const weekView = [firstDay];
    let day = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 1);
    while (day <= lastDay) {
        weekView.push(day);
        day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
    }
    return (
        <div className="ui row calendar">
            <div className="ui seven cards calendar">
                {weekView.map(day => {
                    let className = 'ui card calendar';
                    if (day.getMonth() !== month) {
                        className += ' odd';
                    }
                    return (
                        <div className={className}>
                            <a href='#' >{day.getDate()}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarWeek;