import { View, Text } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
//import Counter from './src/component/Counter';
import LoginFoam from './src/component/LoginFoam';

const App = () => {
  return (
    <Provider store={store}>
      <LoginFoam />
    </Provider>
  );
};

export default App;
