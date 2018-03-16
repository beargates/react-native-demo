import { AppRegistry } from 'react-native';
import Storage from 'react-native-storage';
import asyncStorageConfig from './src/common/config/asyncStorage';
import App from './src/App';

global.storage = new Storage(asyncStorageConfig);

AppRegistry.registerComponent('AwesomeProject', () => App);
