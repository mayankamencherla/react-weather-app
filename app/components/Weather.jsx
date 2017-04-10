var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
            message: "",
            errorMessage: undefined
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
            that.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    },
    render: function() {
        var {message, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading){
                return (<h3 className="text-center">Fetching Weather...</h3>);
            } else {
                return (<WeatherMessage message={message} />);
            }
        }

        function renderErrorMessage() {
            if (typeof errorMessage === 'string'){
                return (<ErrorModal message={errorMessage} />);
            } 
        }

        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm setWeatherMessage={this.setWeatherMessage} />
                {renderMessage()}
                {renderErrorMessage()}
            </div>
        );
    }
});

module.exports = Weather;