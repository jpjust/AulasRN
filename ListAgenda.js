import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Lista } from './MyComponents';

export const ListAgenda = ({ navigation }) => {
  
  const [lista, setLista] = useState([]);

  const adicionar = (nome, telefone) => {
    setLista([...lista, {"nome": nome, "telefone": telefone}]);
  }

  return (
    <View style={styles.container}>
      <Lista conteudo={lista} />
      <Button title="Cadastrar contato" onPress={() => navigation.navigate('AddAgenda', {funcAdd: adicionar})} />
    </View>
  );

}

export default ListAgenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
   
  },
});

