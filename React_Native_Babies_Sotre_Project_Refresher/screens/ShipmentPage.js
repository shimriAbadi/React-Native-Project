import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import COLORS from "../assets/constants/colors";
import { NavigationActions, StackActions } from "react-navigation";
const ShipmentScreen = ({ navigation }) => {
  ShipmentScreen.navigationOptions = (navigationData) => {
    return {
      headerLeft: () => <Text></Text>,
    };
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png"
        }}
      />
      <Text style={styles.content}>אישור הזמנה נשלח אליך למייל ברגעים אלה</Text>
      <View style={styles.btnContainer}>
        <Button
          style={styles.btn}
          color={COLORS.main}
          title={"<- חזור לחנות"}
          onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({
                  routeName: "Cart",
                }),
                NavigationActions.navigate({
                  routeName: "Payment",
                }),
                NavigationActions.navigate({
                  routeName: "ShipmentScreen",
                }),
              ],
            });
            navigation.dispatch(resetAction);
            navigation.navigate("HomePage");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontFamily: "regularFont",
    fontSize: 24,
    textAlign: "center",
  },
  img: {
    height: 330,
    width: "100%",
  },
  btnContainer:{
	  width:60,
	  position:'absolute',
	  bottom:30,
	  right:20
  }
});

export default ShipmentScreen;
