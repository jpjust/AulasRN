import { View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { CaixaDeTexto, Lista } from './MyComponents';

export const AddAgenda = ({ navigation, route }) => {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const { funcAdd } = route.params;

  const adicionar = () => {
    funcAdd(nome, telefone);
    navigation.navigate('ListAgenda');
  }

  return (
    <View style={styles.container}>
      <CaixaDeTexto texto="Nome:" onChangeText={setNome} />
      <CaixaDeTexto texto="Telefone:" onChangeText={setTelefone} />
      <Button title="Adicionar" onPress={adicionar} />
    </View>
  );

}

export default AddAgenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
