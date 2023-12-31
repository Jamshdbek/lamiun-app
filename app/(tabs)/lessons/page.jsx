import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

const Pages = () => {
  const [sound, setSound] = React.useState();
  const [isLoad, setLoad] = React.useState(false);
  async function playSound() {
    console.log("Loading Sound");
    setLoad(true);
    const { sound } = await Audio.Sound.createAsync(
      require("../../../audo/test.m4a")
    );
    setSound(sound);
    setLoad(false);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button
        title={isLoad ? "loading..." : "Play Sound"}
        onPress={playSound}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
export default Pages;
