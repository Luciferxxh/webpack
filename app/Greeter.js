import React, {Component} from "react";
import config from "./config.json";
var shortid = require('js-shortid');

class Greeter extends Component{
    render() {
        var sid = shortid.gen({salts:3,interval:1000});
        console.log(sid);

        return (
            <div>
                {config.greetText}-{sid}
            </div>
        )
    }
}
export default Greeter
