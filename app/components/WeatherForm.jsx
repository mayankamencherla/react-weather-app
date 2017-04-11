var React = require('react');

var WeatherForm = React.createClass({
    ucFirst: function(str) {
        if (str.length === 0){
            return;
        } else if (str.length === 1){
            return str.toUpperCase();
        } else {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
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
                        <input type="search" ref="location" placeholder="Search weather by city" />
                    </div>
                    <div>
                        <button className="hollow button expanded">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;