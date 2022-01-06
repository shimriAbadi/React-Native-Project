import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DataContext } from "../data/MSContextProvider";
import ProductCard from "../components/ProductCard";

const HomePage = (props) => {
  const { categories } = useContext(DataContext);

  return (
    <ScrollView>
      {categories.map((category, index) => (
        <ProductCard
          key={index}
          onSelect={() =>
            props.navigation.navigate({
              routeName: "Category",
              params: {
                categoryProducts: category.products,
                categoryName: category.name,
              },
            })
          }
          title={category.name}
          products={category.products}
          imgUrl={category.imgUrl}
        />
      ))}
    </ScrollView>
  );
};

export default HomePage;
