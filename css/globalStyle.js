import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  card: {
    marginHorizontal: 8,
    width: 178,
    height: 193,
    borderRadius: 8,
  },
  cardImagen: {
    width: 178,
    height: 147,
    borderRadius: 8,
  },
  cardText: {
    color: "#262626",
    fontSize: 12,
    fontWeight: "regular",
  },
  cardTitulo: {
    color: "#262626",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardContentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    alignItems: "center",
  },
  cardPonderacion: {
    flexDirection: "row",
    alignItems: "center",
  },
  heart: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  button: {
    backgroundColor: "#262626",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    color: "#FFFFFF",
  },
  textTitle: {
    color: "#262626",
    fontSize: 24,
    fontWeight: "bold",
  },
  textSubTitle: {
    color: "#9C9C9C",
    fontSize: 16,
    fontWeight: "light",
  },
  textConten: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 4,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: "center",
  },

  colorLight: "#FFFFFF",
  colorDark: "#262626",
  unActive: "#9C9C9C",
  colorLiked: "#ff0000",
});
export default globalStyles;
