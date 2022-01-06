import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { DataContext } from "../data/MSContextProvider";
import COLORS from "../assets/constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentForm = ({ navigation }) => {
  const { setShoppingCart } = useContext(DataContext);
  const [dataInput, setDataInput] = useState({});

  const handleOnChange = (text, name) => {
    setDataInput((prev) => {
      return { ...prev, [name]: text };
    });
  };

  const handleSubmit = () => {
    let correctDetails = true;
  //   if(!dataInput.firsName||!dataInput.lastName||!dataInput.email
	// 	||!dataInput.phoneNumber||!dataInput.state||!dataInput.city||!dataInput.address
	// 	||!dataInput.ownerName||!dataInput.ownerId||!dataInput.cardNumber||!dataInput.day
	// 	||!dataInput.month||!dataInput.year||!dataInput.cvv)
	// 	correctDetails = false;
    
  //   if (
  //     isNaN(Number(dataInput.month)) ||
  //     Number(dataInput.month) < 1 ||
  //     Number(dataInput.month) > 12
  //   ) {
  //     correctDetails = false;
  //   }
  //   if (
  //     isNaN(Number(dataInput.year)) ||
  //     Number(dataInput.year) < 2021
  //   ) {
  //     correctDetails = false;
  //   }
   
	// if(isNaN(Number(dataInput.phoneNumber))||
	// isNaN(Number(dataInput.cardNumber))
	// )
	// 	correctDetails=false;

  //   if (!dataInput.cvv||dataInput.cvv.length != 3) {
  //     correctDetails = false;
  //   }
    if (correctDetails) {
      navigation.navigate("ShipmentScreen");
      setShoppingCart([]);
    } 
    // else Alert.alert("Invalid details");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          onChangeText={(text) => handleOnChange(text, "firstName")}
          style={[styles.inputStyle, styles.inputStyleRegular]}
          placeholder={"שם פרטי"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "lastName")}
          style={[styles.inputStyle, styles.inputStyleRegular]}
          placeholder={"שם משפחה"}
        />
      
      <TextInput
        onChangeText={(text) => handleOnChange(text, "email")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="email-address"
        placeholder={"מייל"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "phoneNumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"מספר טלפון"}
      />
      
        <TextInput
          onChangeText={(text) => handleOnChange(text, "state")}
          style={[styles.inputStyle, styles.inputStyleRegular]}
          placeholder={"מדינה"}
        />
        <TextInput
          onChangeText={(text) => handleOnChange(text, "city")}
          style={[styles.inputStyle, styles.inputStyleRegular]}
          placeholder={"עיר"}
        />
      
      <TextInput
        onChangeText={(text) => handleOnChange(text, "address")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={"כתובת"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerName")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        placeholder={"שם בעל הכרטיס"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "ownerId")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"תעודת זהות"}
      />
      <TextInput
        onChangeText={(text) => handleOnChange(text, "cardNumber")}
        style={[styles.inputStyle, styles.inputStyleRegular]}
        keyboardType="numeric"
        placeholder={"מספר אשראי"}
      />
     
        <View style={styles.dateContainer}>
          
          <TextInput
            onChangeText={(text) => handleOnChange(text, "month")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"חודש"}
          />
		  <Text style={styles.slash}>/</Text>
          <TextInput
            onChangeText={(text) => handleOnChange(text, "year")}
            keyboardType="numeric"
            style={[styles.inputStyle, styles.date]}
            placeholder={"שנה"}
          />
       
        <TextInput
          onChangeText={(text) => handleOnChange(text, "cvv")}
          style={[styles.inputStyle, styles.cvv]}
          keyboardType="numeric"
          placeholder={"CVV"}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.btnContainer}>
        <Text style={styles.paymentText}>לסיום</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  inputStyle: {
    marginTop: 20,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: COLORS.white,
	borderWidth:1,
	borderColor:COLORS.black
  },
  inputStyleRegular: {
    width: "90%",
  },
  title: {
    marginTop: 15,
    fontFamily: "regularFont",
    fontSize: 15,
  },
  btnContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: COLORS.main,
    padding: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  btn: {
    backgroundColor: COLORS.main,
  },
  paymentText: {
    fontFamily: "regularFont",
    color: COLORS.white,
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
	alignItems:'center'
  },
  date: {
    width: "28%",
  },
  cvv: {
    width: "38%",
  },
  slash:{
	  fontSize:45,
	  marginTop:10
  }
});


export default PaymentForm;
