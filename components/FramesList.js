import { StyleSheet, View, FlatList } from "react-native";
import CodeItem from "./CodeItem";

function FramesList({ items }) {
  function renderCodeItem(itemData) {
    return (
      <CodeItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        creator={itemData.item.creator}
        year={itemData.item.year}
        popularity={itemData.item.popularity}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderCodeItem}
      />
    </View>
  );
}
export default FramesList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
