import React from 'react';
import MenuBar from './menu/MenuBar';
import MainContent from './MainContent';
import Dashboard from './Dashboard';
import Calendar from './calendar/Calendar';
import Groceries from './Groceries';
import Favorites from './Favorites';
import SearchResults from './SearchResults';
import recipeApi, { DEFAULT_PARAMS }from '../apis/recipes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: <Dashboard /> ,
            searchHits: []
        };
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
        if (term) {
            recipeApi.get('', {
                params: {
                    ...DEFAULT_PARAMS,
                    q: term
                }
            })
            .then(res => {
                this.setState({ page: <SearchResults hits={res.data.hits} />})
            });
            this.setState({page: <SearchResults />});
        }
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