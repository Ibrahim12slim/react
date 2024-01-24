import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const areactElemenet = React.createElement(
    'a',
    {href : 'http://google.com' , target : '_blank'},
    'click to visit'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    areactElemenet
);
