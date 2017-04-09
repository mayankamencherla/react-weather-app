var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
            message: ""
        };
    },
    setWeatherMessage: function(location) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp){
            var message = `It is currently ${temp} degrees in ${location}.`;
            that.setState({
                message: message,
                isLoading: false,
            });
        }, function (errorMessage){
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },
    render: function() {
        var {message, isLoading} = this.state;

        function renderMessage() {
            if (isLoading){
                return (<h3>Fetching Weather...</h3>);
            } else {
                return (<WeatherMessage message={message} />);
            }
        }

        return(
            <div>
                <h3>Get Weather</h3>
                <WeatherForm setWeatherMessage={this.setWeatherMessage} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;