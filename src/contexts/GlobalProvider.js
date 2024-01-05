import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
	const [contextType, setContextType] = useState("default");
	const [modalMode, setModalMode] = useState("add");
	const [currentItem, setCurrentItem] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedData, setSelectedData] = useState([]);

	const contextValue = {
		contextType,
		setContextType,
		modalMode,
		setModalMode,
		currentItem,
		setCurrentItem,
        selectedItems,
        setSelectedItems,
        selectedData,
        setSelectedData,
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
};
