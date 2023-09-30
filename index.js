/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Dashboard from './Screens/ Dashboard';
import AlertDialog from './Screens/AlertDialog/AlertDialog';
import SplashScreen from './Screens/SplashScreen';
import Login from './Screens/Login';
import {name as appName} from './app.json';
import Navigator from './Screens/Direction/Navigator';

AppRegistry.registerComponent(appName, () => Navigator);
