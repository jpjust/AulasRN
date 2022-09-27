import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CaixaDeTexto = (props) => {
  return (
    <>
      <Text>{props.texto}</Text>
      <TextInput style={styles.caixadetexto}
                 onChangeText={props.onChangeText} />
    </>
  );
}

export const ItemLista = (props) => {
  return (
    <View style={styles.viewitem}>
      <Text style={styles.textnome}>{props.nome}</Text>
      <Text style={styles.texttel}>{props.telefone}</Text>
    </View>
  );
}

export const Lista = (props) => {
  return (
    <View style={styles.lista}>
      {
        props.conteudo.map(({nome, telefone}) =>
         <ItemLista nome={nome} telefone={telefone} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  caixadetexto: {
    backgroundColor: '#aaaaaa',
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    fontSize: '24pt'
  },
  lista: {
    flex: 1,
    width: '100%'
  },
  viewitem: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center'
  },
  textnome: {
    flex: 1,
    fontSize: '24pt'
  },
  texttel: {
    flex: 1,
    fontSize: '24pt'
  },
});
