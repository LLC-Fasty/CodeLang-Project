import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { LANGUAGES } from "../data/dummy-data";
import FrameDetails from "../components/FrameDetails";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function FrameworkDetailScreen({ route, navigation }) {
  const favoritesFramesCtx = useContext(FavoritesContext);

  const frameId = route.params.frameId;

  const selectFrame = LANGUAGES.find((language) => language.id === frameId);

  const frameIsFavorite = favoritesFramesCtx.ids.includes(frameId);

  function changeFavoriteStatusHandler() {
    if (frameIsFavorite) {
      favoritesFramesCtx.removeFavorite(frameId);
    } else {
      favoritesFramesCtx.addFavorite(frameId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={frameIsFavorite ? "heart-sharp" : "heart-outline"}
            color="#f5f5f5"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: selectFrame.imageUrl }} />
        </View>
        <Text style={styles.title}>{selectFrame.title}</Text>
      </View>
      <FrameDetails
        creator={selectFrame.creator}
        year={selectFrame.year}
        popularity={selectFrame.popularity}
        textStyle={styles.detailText}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>What is {selectFrame.title} ?</Text>
      </View>
      <Text style={styles.description}>{selectFrame.description}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.headingContainerTwo}>
            <Text style={styles.heading}>
              How to Insatall {selectFrame.title}.
            </Text>
          </View>
          <List data={selectFrame.howToInstallSteps} />
          <View style={styles.headingContainerTwo}>
            <Text style={styles.heading}>You can Build Products for.</Text>
          </View>
          <List data={selectFrame.usedPlatforms} />
        </View>
      </View>
    </ScrollView>
  );
}
export default FrameworkDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  imageContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  image: {
    width: "auto",
    height: 350,
    objectFit: "contain",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 36,
    color: "#f5f5f5",
    margin: 8,
  },
  detailText: {
    fontSize: 14,
  },
  headingContainer: {
    borderBottomColor: "#f8ff6a",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 28,
    marginVertical: 6,
  },
  headingContainerTwo: {
    borderBottomColor: "#f8ff6a",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  heading: {
    fontSize: 20,
    color: "#fcffc2",
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "#f8ff6a",
    marginHorizontal: 28,
    marginVertical: 4,
    textAlign: "justify",
  },
});
