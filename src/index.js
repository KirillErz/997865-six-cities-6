
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  COUNT: [1, 3, 4, 5]
};

ReactDOM.render(
    <App
      placeCount={Setting.COUNT}
    />,
    document.querySelector(`#root`)
);
