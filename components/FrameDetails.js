import { StyleSheet, View, Text } from "react-native";
function FrameDetails({ creator, year, popularity, style, textStyle }) {
  return (
    <View>
      <View style={[styles.details, style]}>
        <Text style={[styles.detailBY, textStyle]}>By</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {creator.toUpperCase()}
        </Text>
      </View>
      <View style={[styles.detailsTwo, style]}>
        <Text style={[styles.detailBY, textStyle]}>In</Text>
        <Text style={[styles.detailItem, textStyle]}>{year}</Text>
        <Text style={[styles.detailBY, textStyle]}>and</Text>
        <Text style={[styles.detailBY, textStyle]}>it's</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {popularity.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
export default FrameDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 6,
    paddingTop: 6,
  },
  detailsTwo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: "700",
    color: "#f5f5f5",
  },
  detailBY: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "#f5f5f5",
  },
});
