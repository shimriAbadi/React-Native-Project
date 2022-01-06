import React from "react";
import { View, Text, ScrollView } from "react-native";
import ProductCard from "../components/ProductCard";
import COLORS from "../assets/constants/colors";
import { categories } from "../data/data";

const Category = ({ navigation }) => {
  const categoryName = navigation.getParam("categoryName");
	const category = categories.find(c=>c.name == categoryName)
  Category.navigationOptions = (navigationData) => {
    const categoryName = navigationData.navigation.getParam("categoryName");
    return {
      headerTitle: categoryName,
      headerRight: () => (
        <Text
          style={{
            fontSize: 18,
            fontFamily: "boldFont",
            marginRight: 10,
            color: COLORS.white,
          }}
        >
          {category.products.length} מוצרים
        </Text>
      ),
    };
  };

  
  return (
    <ScrollView>
      {category.products.map((product, index) => (
        <ProductCard
          key={index}
          onSelect={() => {
            navigation.navigate({
              routeName: "Product",
              params: { productName: product.title },
            });
          }}
          title={product.title}
          imgUrl={product.imgUrl}
          price={product.finalPrice}
        />
      ))}
    </ScrollView>
  );
};

export default Category;
