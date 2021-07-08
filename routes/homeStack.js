import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
 import ToDo from '../screens/ToDo';
 import ToDoDetails from '../screens/ToDo Details';
 
const screens = {
    Home: {
    screen: ToDo
 },
 ToDoDetails: {
    screen: ToDoDetails
 }
 }
 const HomeStack = createStackNavigator(screens);
 export default createAppContainer(HomeStack);
