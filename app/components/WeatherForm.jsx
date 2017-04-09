var React = require('react');

var WeatherForm = React.createClass({
    ucFirst: function(str) {
        if (str.length === 0){
            return;
        } else if (str.length === 1){
            return str.toUpperCase();
        } else {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    },
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.ucFirst(this.refs.location.value);

        this.refs.location.value = "";

        if (typeof location === 'string' && location.length > 0){
            this.props.setWeatherMessage(location);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="location" placeholder="Enter city name" />
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;