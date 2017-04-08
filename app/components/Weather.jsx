var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function() {
        return{
            message: ""
        };
    },
    setWeatherMessage: function(message) {
        this.setState({message});
    },
    render: function() {
        return(
            <div>
                <h3>Get Weather</h3>
                <WeatherForm setWeatherMessage={this.setWeatherMessage} />
                <WeatherMessage message={this.state.message} />
            </div>
        );
    }
});

module.exports = Weather;