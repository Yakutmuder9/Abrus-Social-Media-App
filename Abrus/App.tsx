import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainComponent from './screens/MainComponent';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

const Stack = createStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MainComponent" component={MainComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
