import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameDetails from "./FrameDetails";

function CodeItem({ id, title, imageUrl, creator, year, popularity }) {
  const navigation = useNavigation();

  function selectFrameItemHandler() {
    navigation.navigate("FrameworkDetail", {
      frameId: id,
    });
  }

  return (
    <View style={styles.codeItem}>
      <Pressable
        android_ripple={{ color: "#fffce6" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectFrameItemHandler}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <FrameDetails creator={creator} year={year} popularity={popularity} />
      </Pressable>
    </View>
  );
}
export default CodeItem;
const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.9,
  },
  codeItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#212121",
    elevation: 4,
    shadowColor: "#252525",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  imageContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  image: {
    width: "auto",
    height: 200,
    objectFit: "contain",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    color: "#f5f5f5",
    margin: 8,
  },
});
