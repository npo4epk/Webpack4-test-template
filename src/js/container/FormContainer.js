import React, { Component } from "react";
import ReactDOM from "react-dom";

import $ from "jquery"

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        console.log('FormContainer');
        return (
            <div>
                <p>Test FormContainer</p>
                <img src="./img/logo.png" alt=""/>
            </div>
        );
    }
}

export default FormContainer;