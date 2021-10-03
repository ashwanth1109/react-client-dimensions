import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClientDimensions } from '../.';

const App = () => {
  const { vw, vh } = useClientDimensions();
  const renderString = `Client dimensions are vw: ${vw}px, vh: ${vh}px`;
  return (
    <div>
      <h1>{renderString}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
