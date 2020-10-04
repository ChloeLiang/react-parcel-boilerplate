import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './styles/main.scss';

const App: FunctionComponent = () => {
  return <Hello />;
};

ReactDOM.render(<App />, document.getElementById('root'));
