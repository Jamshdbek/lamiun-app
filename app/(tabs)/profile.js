import { View,Text, StyleSheet} from "react-native";

const Profile = () => {
  return (
    <View
    style={styles.container}
    >
      <Text> Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
export default Profile;
