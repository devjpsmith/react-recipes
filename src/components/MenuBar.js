import './css/menu-bar.css';
import React from 'react';
import MenuBarItem from './MenuBarItem';
import MenuBarSearch from './MenuBarSearch';

class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeItem: 'Home' };
    }

    onItemClicked = name => {
        this.setState({ activeItem: name });
    }

    onSearchSubmit = term => {
        console.log(term);
    }

    render() {
        const loginText = this.props.isLoggedIn ? 'Logout' : 'Login';

        return (
            <div className="menu-bar">
                <div className="ui raised segment">
                    <div className="ui secondary menu">
                        <MenuBarItem 
                            isActive={this.state.activeItem === 'Home'}
                            onItemClicked={this.onItemClicked} 
                            name="Home" />
                        <MenuBarItem 
                            isActive={this.state.activeItem === 'Meal Calendar'}
                            onItemClicked={this.onItemClicked}
                            name="Meal Calendar" />
                        <MenuBarItem 
                            isActive={this.state.activeItem === 'Groceries'}
                            onItemClicked={this.onItemClicked}
                            name="Groceries" />
                        <MenuBarItem 
                            isActive={this.state.activeItem === 'Favorites'}
                            onItemClicked={this.onItemClicked}
                            name="Favorites" />
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