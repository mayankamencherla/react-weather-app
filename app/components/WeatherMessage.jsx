var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        return (
            <p>{this.props.message}</p>
        );
    }
});

module.exports = WeatherMessage;