import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add Room");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Save data from Edit Room: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Room: ", currentItem);
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
		<RoomContext.Provider value={contextValue}>
			{children}
		</RoomContext.Provider>
	);
};
