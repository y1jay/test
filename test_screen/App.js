import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';
const AppNavigator = createStackNavigator ({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    },
  },
  SignUp:{
    screen: SignupScreen,
    navigationOptions :{
      headerShown: false
    }
  }
});

export default createAppContainer(AppNavigator);