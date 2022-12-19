import React from 'react';
import { Provider } from 'react-redux';
import blog from './containers/blog';
import blogInfo from './containers/blogInfo';
import configureStore from './store';

const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          width: '50vw',
          justifyContent: 'space-between',
        }}
      >
        <blog />
        <blogInfo />
      </div>
    </Provider>
  );
}

export default App;
