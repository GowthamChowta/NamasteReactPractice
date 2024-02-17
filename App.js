import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("h1",{},"This is an h1 tag");

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)