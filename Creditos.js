import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListCreditos from './ListCreditos';

const CreditosStack = createNativeStackNavigator();

const Creditos = () => {
  return (
    <CreditosStack.Navigator>
      <CreditosStack.Screen name="ListCreditos" component={ListCreditos} title="Creditos" />
    </CreditosStack.Navigator>
  );
}

export default Creditos;
