var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        return (
            <h3>{this.props.message}</h3>
        );
    }
});

module.exports = WeatherMessage;