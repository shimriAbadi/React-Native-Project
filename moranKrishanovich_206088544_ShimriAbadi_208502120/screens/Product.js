import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
 TouchableOpacity,
  Alert,
} from "react-native";
import { DataContext } from "../data/MSContextProvider";
import COLORS from "../assets/constants/colors";

const Product = ({ navigation }) => {
  const { products, setChosenProduct, setShoppingCart} =
    useContext(DataContext);

  const product = products.find((product) => product.title === navigation.getParam("productName"));
  Product.navigationOptions = (navigationData) => {
    const productName = navigationData.navigation.getParam("productName");
    return {
      headerTitle: productName,
    };
  };

  


  useEffect(() => {
    setChosenProduct(product);
  }, []);
  return (
    <ScrollView >
		<View style={styles.container}>
      <ImageBackground
        style={styles.imgBackGroundStyle}
        imageStyle={{ resizeMode: "cover" }}
        source={{ uri: product.imgUrl }}
      >
       <TouchableOpacity onPress={() => {
              setShoppingCart((prev) => [...prev, product]);
              Alert.alert("Added to cart!")
            }} style={styles.addBtn}>
		   <Text style={styles.addText}>+</Text>
		   </TouchableOpacity> 
      </ImageBackground>
	  <View style={styles.productTitle}>
          <Text style={styles.titleContent}>{product.title}</Text>
        </View>
      <View style={styles.infoContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoContent}>{product.paragraph}</Text>
        </View>
		
			<View  style={styles.contentRow}>
                <Text style={styles.infoContent}>
                  {product.measure}
                </Text>
                <Text style={styles.infoContentBold}>
            	 מידה:
                </Text>
              </View>

			  <View  style={styles.contentRow}>
                <Text style={styles.infoContent}>
                  {product.delivery}₪
                </Text>
                <Text style={styles.infoContentBold}>
            	 משלוח:
                </Text>
              </View>

			  <View  style={styles.contentRow}>
                <Text style={styles.infoContent}>
                  {product.finalPrice+product.delivery}₪
                </Text>
                <Text style={styles.infoContentBold}>
            	 מחיר סופי:
                </Text>
              </View>

			  
              
			  
	
        
      </View>
	{console.log(product)}
	  {product.comments.map(comment=>{
		return(
		<View style={styles.commentContainer}>
			<View style={styles.userDetails}>
				<Text style={styles.userName}>{comment.userName}</Text>
			</View>
			<Text style={styles.msg}>{comment.msg}</Text>
		</View>
	)})}
	  </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  imgBackGroundStyle: {
    flex: 0.4,
	height:400,
    width: "100%",
    justifyContent: "flex-end",
  },
  titleContent: {
    color: COLORS.black,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "headerFont",
  },
  productTitle: {
    backgroundColor: COLORS.white,
	width:'100%',

  },
  infoContainer: {
    flex: 1,
    width: "100%",
	padding:10,
	backgroundColor:"#FFF5EE"
  },
  infoContent: {
    fontSize: 18,
    fontFamily: "regularFont",
    textAlign: "center",
	direction:'rtl',
	color:COLORS.black
  },
  infoContentBold: {
    fontSize: 22,
    fontFamily: "boldFont",
	direction:'rtl',
	color:COLORS.black
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
	
  },
  addBtn: {
    width: 50,
	height:50,
    marginBottom: 20,
    backgroundColor: COLORS.main,
    padding: 10,
    flexDirection: "row",
    borderRadius: 100,
    justifyContent: "center",
	alignContent:'center',
	position:"absolute",
	right:5,
	bottom:-10
  },
  addText: {
    fontSize: 20,
	fontWeight:'bold',
    fontFamily: "regularFont",
    color: COLORS.white,
  },
  userDetails: {
	flexDirection: "row",
	alignItems:'center',
	backgroundColor:COLORS.white,
	justifyContent:'center',
	alignSelf:'flex-start',
},
img: {
	borderRadius: 200,
	resizeMode: "cover",
	width: "100%",
	height: 40,
	overflow: "hidden",
	borderWidth: 1,
	borderColor:'transparent'
},
userName:{
	fontFamily:'regularFont',
	paddingLeft:5,
	paddingRight:5,
	color:COLORS.black,
	borderBottomWidth:1,
	

},
commentContainer:{
	marginBottom:30,
	width:'100%',
	paddingTop:15
},
msg:{
	fontFamily:'regularFont',
	paddingLeft:13,
	paddingRight:13,
	fontSize:18
	
}
});



export default Product;
