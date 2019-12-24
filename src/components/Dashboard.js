import './css/dashboard.css';
import React from 'react';
import mealApi from '../apis/meals';

class Dashboard extends React.Component {

    state = { meals: [] };

    componentDidMount() {
        mealApi.get().then(res => {
            this.setState({ meals: res })
        });
    }

    renderMealCards = () => {
        return this.state.meals.map(meal => {
            const favorite = meal.favorite
                ? <i className="heart icon"></i>
                : <i className="heart outline icon"></i>; 
            return (
                <div key={meal.id} className="ui card">
                    <div className="content">
                        <div className="ui small header">
                            {meal.title}
                        </div>
                        <div className="image">
                            <img alt={meal.title} src={meal.imageUrl} />
                        </div>
                            {meal.description}
                    </div>
                    <div className="extra content">
                        <button className="ui primary basic button">View Recipe</button>
                    </div>
                    <div className="extra content">
                        <div className="ui small header">
                            <div className="right floated meta">{favorite}</div>
                            {meal.day}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="dashboard">
                <div className="ui segments">
                    <div className="ui segment grey inverted">
                        <div className="ui medium header">Upcoming Meals</div>
                    </div>
                    <div className="ui segment">
                        <div className="ui three cards card-container">
                            {this.renderMealCards()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;