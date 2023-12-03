import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add");
	};

	const handleUpdateData = () => {
		console.log("Save data from Edit");
	};

	const handleDeleteData = () => {
		console.log("Delete data from User");
	};

	const handleSearchData = (searchTerm) => {
		console.log(`Fetch data base on ${searchTerm}`);
	};

    const handleExportData = () => {
		console.log("Export data successfully");
	};

	const contextValue = CRUDContext(
		handleLoadData,
		handleCreateData,
		handleUpdateData,
		handleDeleteData,
		handleSearchData, 
        handleExportData, 
	);

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};
