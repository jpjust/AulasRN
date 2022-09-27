import { Text, View, StyleSheet } from "react-native";

export default function ListCreditos() {
  return (
    <View style={styles.container}>
      <Text>Quem fez foi eu!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
   
  },
});
