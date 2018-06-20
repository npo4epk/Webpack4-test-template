import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormContainer from "./container/FormContainer";

import style from "./../scss/main.scss";

const wrapper = document.getElementById("app");

console.log('index');

    ReactDOM.render(
        <FormContainer />,
        wrapper
    );
