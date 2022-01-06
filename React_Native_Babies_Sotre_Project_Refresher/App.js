import React, { useState,useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MSContextProvider from "./data/MSContextProvider";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MSShopNavigation from "./navigation/MSShopNavigation";

const fetchFonts = async() => {
	await Font.loadAsync({
		"headerFont": require("./assets/fonts/NotoSerif-BoldItalic.ttf"),
		"regularFont": require("./assets/fonts/NotoSerif-Bold.ttf"),
		"boldFont": require("./assets/fonts/NotoSerif-Italic.ttf"),
	});
};

export default function App() {

	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) 
		return (
			<AppLoading
				startAsync={()=>fetchFonts()}
				onFinish={() => setDataLoaded(true)}
				onError={() => console.log(err)}
			/>
		);
	
	return (
		<MSContextProvider>
		 <MSShopNavigation/>
		</MSContextProvider>
		
	);
}
