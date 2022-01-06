import React, { createContext, useState } from "react";
import { products } from "./data";
import { categories } from "./data";

export const DataContext = createContext();

const MSContextProvider = (props) => {
	const [chosenProduct, setChosenProduct] = useState(null);
	const [shoppingCart, setShoppingCart] = useState([]);

	const coupons = [
		"123",
		"456",
		"789"
	  ];

	return (
		<DataContext.Provider
			value={{
				products: products,
				categories: categories,
				chosenProduct,
				setChosenProduct,
				shoppingCart,
				setShoppingCart,
				coupons
			}}>
			{props.children}
		</DataContext.Provider>
	);
};

export default MSContextProvider;
