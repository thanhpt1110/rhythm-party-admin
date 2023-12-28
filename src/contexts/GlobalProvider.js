import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
	const [contextType, setContextType] = useState("user");
	const [modalMode, setModalMode] = useState("add");
	const [currentItem, setCurrentItem] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

	const contextValue = {
		contextType,
		setContextType,
		modalMode,
		setModalMode,
		currentItem,
		setCurrentItem,
        selectedItems,
        setSelectedItems,
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
};
