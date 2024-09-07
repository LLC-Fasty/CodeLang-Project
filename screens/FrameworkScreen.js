import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native"; Alternate Option
// const route = useRoute();
// const cId = route.params.codeId;
import { LANGUAGES, CATEGORIES } from "../data/dummy-data";
import CodeItem from "../components/CodeItem";
import FramesList from "../components/FramesList";

function FrameworkScreen({ route, navigation }) {
  const cId = route.params.codeId;
  const displayFramework = LANGUAGES.filter((codeItem) => {
    return codeItem.codeIds.indexOf(cId) >= 0;
  });

  useLayoutEffect(() => {
    const codeTitle = CATEGORIES.find((category) => category.id === cId).title;

    navigation.setOptions({
      title: codeTitle,
    });
  }, [cId, navigation]);

  return <FramesList items={displayFramework} />;
}
export default FrameworkScreen;
const styles = StyleSheet.create({});
