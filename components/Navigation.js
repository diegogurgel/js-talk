import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

const AppNavigator = createStackNavigator({
  ListScreen,
  DetailScreen
});

export default createAppContainer(AppNavigator);
