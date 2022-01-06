import React from "react";
import { Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProductScreen from "../screens/Product";
import CategoryScreen from "../screens/Category";
import HomePageScreen from "../screens/HomePage";
import PaymentScreen from "../screens/Payment";
import CartScreen from "../screens/Cart";
import ShipmentScreen from "../screens/ShipmentPage";

import COLORS from "../assets/constants/colors";

const ShopNavigator = createStackNavigator(
  {
    HomePage: HomePageScreen,
    Category: CategoryScreen,
    Product: ProductScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.main : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.main,
    },
  }
);

// tab navigator -
const ShoppingCart = createBottomTabNavigator(
  {
    Shop: {
      screen: ShopNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="shop" size={24} color={COLORS.black} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator(
        {
          Cart: CartScreen,
          Payment: PaymentScreen,
          ShipmentScreen: ShipmentScreen,
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? COLORS.main : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : COLORS.main,
          },
        }
      ),

      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: (tabInfo) => {
          return (
			<Entypo name="shopping-cart" size={24} color={COLORS.black} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.main,
    },
  }
);

export default createAppContainer(ShoppingCart);
