import React from 'react';

class MenuBarSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onChange = event => {
        this.setState({ term: event.target.value });
    }

    onSearchSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onSearchSubmit}>
                <div className="field">
                    <div className="item">
                        <div className="ui icon input">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={this.state.term}
                                onChange={this.onChange}
                            />
                            <i className="search link icon" onClick={this.onSearchSubmit}></i>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default MenuBarSearch;