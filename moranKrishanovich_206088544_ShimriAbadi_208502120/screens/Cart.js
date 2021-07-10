import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from "react-native";
import { DataContext } from "../data/MSContextProvider";
import COLORS from "../assets/constants/colors.js";


const Cart = ({ navigation }) => {
  const { shoppingCart, coupons } = useContext(DataContext);
  const [quantity, setQuantity] = useState({});
  const [groupByCart, setgroupByCart] = useState([]);
  const [couponText, setCouponText] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleOnChange = (text) => setCouponText(text);
  const getStyleBG = (index)=>{
	if(index%2 == 0)
	return {backgroundColor:'lightgray'}
	else
	return {backgroundColor:'white'}
  }
  const handleCoupon = () => {
	setCurrentPrice(getPrice())
    switch (couponText) {
		case "123":
				setCurrentPrice(price=>price-price*0.1)
			break;
		
		case "456":
			setCurrentPrice(price=>price-price*0.2)
		break;
		
		case "789":
			setCurrentPrice(price=>price-price*0.3)
		break;
	
		default:
			Alert.alert("wrong coupon!")
	}

  };

 

  const getPrice = ()=>{
	  let sum = 0;
	  shoppingCart.map(p=>{
		  sum+=p.finalPrice
		  sum+=p.delivery
	  })
	  return sum;
  }
  
  useEffect(() => {
    const tempQuantity = {};
    shoppingCart.map((product) => {
      tempQuantity[product.title]
        ? tempQuantity[product.title]++
        : (tempQuantity[product.title] = 1);
    });
    setQuantity(tempQuantity);
    const tempProductPresentation = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (
        tempProductPresentation.find(
          (product) => shoppingCart[i].title === product.title
        ) == undefined
      )
        tempProductPresentation.push(shoppingCart[i]);
    }
    setgroupByCart(tempProductPresentation);
	
  }, [shoppingCart]);

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>שם</Text>
        <Text style={styles.details}>משלוח</Text>
        <Text style={styles.details}>מחיר</Text>
        <Text style={[styles.details, styles.quantity]}>כמות</Text>
        <Text style={styles.details}>מחיר עם משלוח</Text>
        <Text style={styles.details}>סך הכל</Text>
      </View>
	  <View >
      {groupByCart.map((product,index) => (
	
			<View style={[styles.rowContainer,getStyleBG(index)]}>
			  <Text style={styles.details}>{product.title}</Text>
			  <Text style={styles.details}>{product.delivery}</Text>
			  <Text style={styles.details}>{product.finalPrice}</Text>
			  <Text style={[styles.details, styles.quantity]}>{quantity[product.title]}</Text>
			  <Text style={styles.details}>{product.finalPrice+product.delivery}</Text>
			  <Text style={styles.details}>{product.finalPrice+product.delivery*quantity[product.title]}</Text>
			</View>
		  
      ))}
	  </View>
      <View style={styles.cost}>
	  <TouchableOpacity onPress={handleCoupon} style={styles.couponBtn}>
          <Text style={styles.couponText}>אישור</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => handleOnChange(text)}
          placeholder={"הקלד קופון..."}
        />
	  <Text style={styles.costText}>הזן קופון: </Text>

      </View>

        

      <View style={styles.cost}>
        <Text>{currentPrice!=0?currentPrice:getPrice()}₪</Text>
        <Text style={styles.costText}>סה"כ לתשלום: </Text>
      </View>
      <View style={styles.purchaseContainer}>
        <TouchableOpacity
          style={styles.couponBtn}
          onPress={() =>
            shoppingCart.length > 0 && navigation.navigate("Payment")
          }
        >
          <Text style={styles.couponText}>תשלום</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
  },
  details: {
    fontSize: 12,
    fontFamily: "boldFont",
    width: 60,
    marginRight: 10,
    textAlign: "center",
  },
  cost: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,

  },
  costText: {
    fontSize: 17,
  },
  quantity: {
    width: 30,
  },
  inputStyle: {
    height: 40,
    width: "50%",
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
	borderWidth:1,
    marginRight: 5,
  },
  couponBtn: {
    width: "30%",
    height: 40,
    backgroundColor: 'lightgray',
    padding: 5,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
	marginRight:5,
	borderWidth:1,

  },
  couponText: {
    fontSize: 14,
    fontFamily: "regularFont",
    color: COLORS.black,
    marginRight: 10,
  },
  purchaseContainer: {
    marginTop: 10,
    alignItems: "center",
  },
	rowContainer: {
		width:'100%',
	  flexDirection: "row",
	  alignItems: "center",
	  backgroundColor:'lightgray'
	},
	details: {
	  fontSize: 12,
	  fontFamily: "regularFont",
	  width: 60,
	  marginRight: 10,
	  textAlign: "center",
	},
	quantity: {
	  width: 30,
	},
	btnContainer:{
		alignItems:'center'
	}

});

export default Cart;
