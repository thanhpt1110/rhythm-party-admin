import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add User");
	};

	const handleUpdateData = (currentItem) => {
        console.log("Save data from Edit User: ", currentItem);  
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from User: ", currentItem);
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
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};
