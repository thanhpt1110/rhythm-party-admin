import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const SongContext = createContext();

export const SongProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add Song");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Save data from Edit Song: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Song: ", currentItem);
	};  

	const handleSearchData = (searchTerm) => {
		console.log(`Fetch data base on ${searchTerm}`);
	};

    const handleExportData = () => {
		console.log("Export data successfully");
	};

    const handleDeleteList = (selectedItems) => {
        console.log(selectedItems);
    }

	const contextValue = CRUDContext(
		handleLoadData,
        handleCreateData,
		handleUpdateData,
		handleDeleteData,
		handleSearchData, 
        handleExportData, 
        handleDeleteList, 
	);

	return (
		<SongContext.Provider value={contextValue}>
			{children}
		</SongContext.Provider>
	);
};
