import { Text, StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: windowWidth < 380 ? 12 : 24,
		borderRadius: 8,
		margin: windowWidth < 380 ? 12 : 24,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.accent500,
		fontSize: windowWidth < 380 ? 28 : 36,
		fontFamily: "open-sans-bold",
	},
});
