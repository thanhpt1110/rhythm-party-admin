import { createContext } from "react";
import CRUDContext from "./CRUDContext";

// @ts-ignore
export const PendingApprovalContext = createContext();

export const PendingApprovalProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

	const handleCreateData = () => {
		console.log("Save data from Add Playlist");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Save data from Edit Playlist: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Playlist: ", currentItem);
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
		<PendingApprovalContext.Provider value={contextValue}>
			{children}
		</PendingApprovalContext.Provider>
	);
};
