/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import {name as appName} from './app.json';

const ReduxApp = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };


AppRegistry.registerComponent(appName, () => ReduxApp);
