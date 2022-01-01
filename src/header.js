//header compo
import {Link, withRouter} from 'react-router-dom';

export default function Header(props) {
return (
<nav className="navbar navbar-dark bg-primary fixed-top">
    <Link className="navbar-brand" to="/">
    Dionysus Era 
    </Link>
    <button className="btn btn-dark">Sign In</button>
</nav>
);
}

/****************22****************
 *
npm install --save-dev style-loader
It's recommended to combine style-loader with the css-loader

Then add the loader to your webpack config. For example:

style.css

body {
background: green;
}
component.js

import "./style.css";
webpack.config.js

module.exports = {
module: {
rules: [
    {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
    },
],
},
};
Optio
 ******************************DED*/
