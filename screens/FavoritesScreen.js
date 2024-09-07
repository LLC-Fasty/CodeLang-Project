import { StyleSheet, View, Text } from "react-native";
import FramesList from "../components/FramesList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { LANGUAGES } from "../data/dummy-data";
function FavoritesScreen() {
  const favoritesFramesCtx = useContext(FavoritesContext);

  const favoriteFrames = LANGUAGES.filter((frame) =>
    favoritesFramesCtx.ids.includes(frame.id)
  );

  if (favoriteFrames.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorites Frameworks Yet.</Text>
      </View>
    );
  }
  return <FramesList items={favoriteFrames} />;
}
export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5f5f5",
  },
});
