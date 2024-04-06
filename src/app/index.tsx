import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Biz momiq ichidamiz</Text> */}
       
      <View style={styles.top}>
        <Text ></Text>
      </View>
      <View style={styles.downList}>
        <Text ></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  top:{
    width:"100%",
    height:"30%",
  },
  downList:{
    width:"100%",
    height:"100%",
    borderRadius:50,
    backgroundColor:"red"
  }
});
