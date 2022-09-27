import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agenda from './Agenda.js';
import Creditos from './Creditos.js';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Agenda') {
            return <Text>{ '\u{260e}' }</Text>;
          } else if (route.name === 'Creditos') {
            return <Text>{ '\u{1f525}' }</Text>
          }
        },
      })}>
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Creditos" component={Creditos} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}

export default App;
