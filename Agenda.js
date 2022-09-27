import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAgenda from './AddAgenda.js';
import ListAgenda from './ListAgenda.js';

const AgendaStack = createNativeStackNavigator();

const Agenda = () => {
  return (
    <AgendaStack.Navigator>
      <AgendaStack.Screen name="ListAgenda" component={ListAgenda} title="Agenda" />
      <AgendaStack.Screen name="AddAgenda"  component={AddAgenda}  title="Cadastrar contato" />
    </AgendaStack.Navigator>
  );
}

export default Agenda;
