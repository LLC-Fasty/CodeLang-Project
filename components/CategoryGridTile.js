import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color1, colortext, onPress }) {
  // const navigation = useNavigation();
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#e2e2e2" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color1 }]}>
          <Text style={[styles.title, { color: colortext }]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 30,
    elevation: 4,
    shadowColor: "#252525",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: Platform.OS === "android" ? 22 : 24,
    letterSpacing: 1,
  },
});
