import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add Artist");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Save data from Edit Artist: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Artist: ", currentItem);
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
		<ArtistContext.Provider value={contextValue}>
			{children}
		</ArtistContext.Provider>
	);
};
