//we import this module because babel converts and understands 
//the JSX code by converting it to React.createElement 
import React from "react";
//this react-dom connects and talks with the actual browsere DOM
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
//on running the app this const element is converted and represented as 
//an object on the browser console, this object is a part of 
//virtual Dom of react with some properties or attributes
console.log(element);

//putting this react element on our UI using render method
ReactDOM.render(element, document.getElementById('root'));
//the root mentioned inside render is called from the 
//file public/index.html <div id="root"></div>
//element is placed inside root division