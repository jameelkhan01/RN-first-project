import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Movie from './src/component/Movie';
import Favorites from './src/sacreens/Favorits';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Movies" component={Movie} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
