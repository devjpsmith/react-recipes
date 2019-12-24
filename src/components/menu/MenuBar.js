import '../css/menu-bar.css';
import React from 'react';
import MenuBarItem from './MenuBarItem';
import MenuBarSearch from './MenuBarSearch';

class MenuBar extends React.Component {

    static page = {
        home: 'Home',
        calendar: 'Meal Calendar',
        groceries: 'Groceries',
        favorites: 'Favorites'
    }

    constructor(props) {
        super(props);

        this.state = { activeItem: 'Home' };
    }

    onItemClicked = name => {
        this.setState({ activeItem: name });
        this.props.onPageSelected(name);
    }

    onSearchSubmit = term => {
        this.props.onSearchSubmit(term);
    }

    render() {
        const loginText = this.props.isLoggedIn ? 'Logout' : 'Login';

        return (
            <div className="menu-bar">
                <div className="ui raised segment">
                    <div className="ui secondary menu">
                        <MenuBarItem 
                            isActive={this.state.activeItem === MenuBar.page.home}
                            onItemClicked={this.onItemClicked} 
                            name={MenuBar.page.home} />
                        <MenuBarItem 
                            isActive={this.state.activeItem === MenuBar.page.calendar}
                            onItemClicked={this.onItemClicked}
                            name={MenuBar.page.calendar} />
                        <MenuBarItem 
                            isActive={this.state.activeItem === MenuBar.page.groceries}
                            onItemClicked={this.onItemClicked}
                            name={MenuBar.page.groceries} />
                        <MenuBarItem 
                            isActive={this.state.activeItem === MenuBar.page.favorites}
                            onItemClicked={this.onItemClicked}
                            name={MenuBar.page.favorites} />
                        <div className="right menu">
                            <MenuBarSearch onSearchSubmit={this.onSearchSubmit} />
                            <a className="ui item">{loginText}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;