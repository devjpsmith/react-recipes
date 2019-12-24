import React from 'react';
import CalendarWeek from './CalendarWeek';
import { waitForElement } from '@testing-library/dom';

class Calendar extends React.Component {
    now = new Date();

    days = {
        '0': 'Sun',
        '1': 'Mon',
        '2': 'Tues',
        '3': 'Wed',
        '4': 'Thur',
        '5': 'Fri',
        '6': 'Sat',
    };

    months = {
        '0': 'January',
        '1': 'February',
        '2': 'March',
        '3': 'April',
        '4': 'May',
        '5': 'June',
        '6': 'July',
        '7': 'August',
        '8': 'September',
        '9': 'October',
        '10': 'November',
        '11': 'December',
    };

    constructor(props) {
        super(props);

        this.state = {
            month: this.now.getMonth(),
            year: this.now.getFullYear(),
            monthView: this.getMonthView(this.now.getFullYear(), this.now.getMonth())
        };
    }

    onMonthAdvance = () => {
        let { month, year } = this.state;
        if (month === 11) {
            year++;
            month = 0;
        } else {
            month++;
        }
        const monthView = this.getMonthView(year, month);
        this.setState({ month, year, monthView });
    }

    onMonthRegress = () => {
        let { month, year } = this.state;
        if (month === 0) {
            year--;
            month = 11;
        } else {
            month--;
        }
        const monthView = this.getMonthView(year, month);
        this.setState({ month, year, monthView });
    }

    getMonthView(year, month) {
        const monthView = [];
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        let weekSpan = this.getWeekSpan(firstDay);
        monthView.push(weekSpan);
        while (weekSpan.saturday < lastDay) {
            const sunday = new Date(weekSpan.sunday.getFullYear(), weekSpan.sunday.getMonth(), weekSpan.sunday.getDate() + 7);
            weekSpan = this.getWeekSpan(sunday);
            monthView.push(weekSpan);
        }
        return monthView;
    }

    getWeekSpan(date) {
        const sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
        const saturday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + 6);
        return { sunday, saturday };
    }

    render() {
        const week = this.getWeekSpan(this.now);
        return (
            <div className="ui segments">
                <div className="ui segment grey inverted">
                    <div className="calendar-header">
                        <i
                            className="angle double left icon inverted calendar-header"
                            onClick={this.onMonthRegress}></i>
                        <span className="ui header medium inverted">
                            {`${this.months[this.state.month]} ${this.state.year}`}
                        </span>
                        <i
                            className="angle double right icon inverted calendar-header"
                            onClick={this.onMonthAdvance}></i>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui seven cards">
                        <div style={{ textAlign: 'center' }} className="ui card">Sunday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Monday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Tuesday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Wednesday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Thursday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Friday</div>
                        <div style={{ textAlign: 'center' }} className="ui card">Saturday</div>
                    </div>
                    <div className="calendar-box">
                        {this.state.monthView.map(week => {
                            return (
                                <CalendarWeek firstDay={week.sunday} lastDay={week.saturday} month={this.state.month} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;