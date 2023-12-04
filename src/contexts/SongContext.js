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

	const handleUpdateData = () => {
		console.log("Save data from Edit Song");
	};

	const handleDeleteData = () => {
		console.log("Delete data from Song");
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
		<SongContext.Provider value={contextValue}>
			{children}
		</SongContext.Provider>
	);
};
