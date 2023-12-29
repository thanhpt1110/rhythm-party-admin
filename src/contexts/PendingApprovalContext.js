import { createContext, useContext } from "react";
import CRUDContext from "./CRUDContext";
import { GlobalContext } from "./GlobalContext";

// @ts-ignore
export const PendingApprovalContext = createContext();

export const PendingApprovalProvider = ({ children }) => {
	const handleLoadData = () => {
		console.log("Load initial data");
	};

    const handleCreateData = () => {
		console.log("Save data from Add Artist");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Approve current item: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Pending Approval: ", currentItem);
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

    const {selectedItems} = useContext(GlobalContext)
    const handleApproveList = () => {
        console.log(selectedItems)
    }

    const contextValue = {
        ...CRUDContext(
            handleLoadData,
            handleCreateData,
            handleUpdateData,
            handleDeleteData,
            handleSearchData, 
            handleExportData, 
            handleDeleteList, 
        ),
        handleApproveList,
    };
    
	return (
		<PendingApprovalContext.Provider value={contextValue}>
			{children}
		</PendingApprovalContext.Provider>
	);
};
