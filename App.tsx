import Login from './src/Screen/LoginScreen';
import SignUp from './src/Screen/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 

const App = () => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName="Login"

      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
