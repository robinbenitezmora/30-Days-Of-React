/*What is the difference between a regular function and an arrow function?
A regular function is defined with the function keyword, and can be named or anonymous. 
Arrow functions are always anonymous. Arrow functions are defined using the fat arrow syntax =>. 
Arrow functions do not have their own this, arguments, super, or new.target. 
These functions capture the this value of the enclosing context.

What is a React component?
A React component is a small, reusable chunk of code that is responsible for one job.
It can be used to display a small chunk of HTML, or it can be used to contain other components.

How do you make a React functional component?
You can make a React functional component by using the function keyword.

What is the difference between a pure JavaScript function and a React functional component?
A pure JavaScript function is a function that does not depend on any state or props.

How small is a React component?
A React component can be as small as a single line of HTML, 
or it can be as large as an entire application.

Can we make a button or input field component?
Yes, we can make a button or input field component.
*/

// Exercise 1
//Make a reusable button component

import React from 'react';
import ReactDOM from 'react-dom';

function Button() {
  return <button>Click me!</button>;
}

Button();

// Exercise 2
//Make a reusable input field component

function InputField() {
  return <input type="text" placeholder="Enter your name" />;
}

InputField();

// Exercise 3
//Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box, danger alert box)
 
function AlertBox() {
  return (
    <div>
      <p>Warning</p>
    </div>
  );
}

AlertBox();