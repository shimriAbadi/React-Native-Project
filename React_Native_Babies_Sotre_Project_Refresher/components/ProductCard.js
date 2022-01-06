import React from "react";
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import COLORS from "../assets/constants/colors";
const ProductCard = ({onSelect, imgUrl, title, price }) => {
	return (
		<TouchableOpacity onPress={onSelect} style={styles.container}>
			<View style={styles.cardContainer}>
				<ImageBackground
					style={styles.imgBG}
					imageStyle={{ resizeMode: "cover" }}
					source={{ uri: imgUrl }}>
					
				</ImageBackground>
				<View style={!price?styles.productTitle:{flexDirection:'column',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
						<Text style={styles.titleContent}>{title}</Text>
						<Text style={styles.titleContent}>{price?price+'₪':''}</Text>
					</View>
			</View>	
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		alignItems: "center",
		justifyContent: "center",
		padding:10,
	},
	imgBG: {
		flex: 1,
		width: "100%",
		height:250,
		justifyContent: "flex-end",
	},
	titleContent: {
		color: COLORS.white,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "headerFont",
	},
	cardContainer:{
		backgroundColor: COLORS.white,
		width:'90%',
		shadowColor: "black",
		shadowRadius: 10,
		shadowOpacity: 1,
		padding: 10,
	},
	productTitle:{
		backgroundColor:'rgba(0, 0, 0, 0.5)',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	}
});
export default ProductCard;
