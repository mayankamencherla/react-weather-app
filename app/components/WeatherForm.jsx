var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function() {
        var city = this.refs.city.value;

        this.refs.city.value = "";

        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=7d85dc47d0c7f8d36ea406455d9a089a`;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        var response = JSON.parse(xhr.response);

        var temp = response.main.temp;

        var message = `It is currently ${temp} degrees in ${city}.`;

        if (typeof city === 'string' && city.length > 0){
            this.props.setWeatherMessage(message);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="city" placeholder="Enter city name" />
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