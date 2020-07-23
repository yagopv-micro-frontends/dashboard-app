import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderDashboard = (containerId, props) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.render(<App {...props} />, container);
};

window.unMountDashboard = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
};
