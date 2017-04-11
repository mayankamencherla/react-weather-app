var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Making this app was a great experience. I learnt the ins and outs of the React.js framework. I also learnt some HTML, CSS and the foundation framework which I used to style the app. I have highlighted some of the skills needed to make this app yourself down below:</p>
            <ol>
                <li>
                    <a href='http://eloquentjavascript.net'>JavaScript</a>
                </li>
                <li>
                    <a href='https://facebook.github.io/react/tutorial/tutorial.html'>React.js library</a>
                </li>
                <li>
                    <a href='https://www.codecademy.com/learn/web'>HTML/CSS</a>
                </li>
                <li>
                    <a href='http://foundation.zurb.com/sites/docs/'>Foundation CSS framework</a>
                </li>
            </ol>
        </div>
    );
}

module.exports = About;