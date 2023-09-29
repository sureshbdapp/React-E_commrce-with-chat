/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Dashboard from './Screens/ Dashboard';
import AlertDialog from './Screens/AlertDialog/AlertDialog';
import SplashScreen from './Screens/SplashScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Dashboard);
