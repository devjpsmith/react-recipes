import React from 'react';
import MenuBar from './MenuBar';
import MainContent from './MainContent';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Groceries from './Groceries';
import Favorites from './Favorites';
import SearchResults from './SearchResults';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: <Dashboard /> }
    }

    getPageByName(pageName) {
        switch (pageName) {
        case MenuBar.page.favorites: return <Favorites />
        case MenuBar.page.calendar: return <Calendar />
        case MenuBar.page.groceries: return <Groceries />
        default: return <Dashboard />
        }
    }

    onPageSelected = pageName => {
        const page = this.getPageByName(pageName);
        this.setState({ page });
    }

    onSearchSubmit = term => {
        this.setState({page: <SearchResults />});
    };

    render() {
        return (
            <div className="ui container">
                <MenuBar 
                    onPageSelected={this.onPageSelected} 
                    onSearchSubmit={this.onSearchSubmit }
                />
                <MainContent content={this.state.page} />
            </div>
        );
    }
}

export default App;