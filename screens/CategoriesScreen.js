import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itmeData) {
    function pressHandler() {
      navigation.navigate("Frameworks", {
        codeId: itmeData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itmeData.item.title}
        color1={itmeData.item.color1}
        colortext={itmeData.item.colortext}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({});
