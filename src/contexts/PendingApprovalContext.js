import { createContext, useContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { GlobalContext } from "./GlobalContext";
import { getAllPendingApproval, searchPendingApproval } from "api/MusicApi";
// @ts-ignore
export const PendingApprovalContext = createContext();

export const PendingApprovalProvider = ({ children }) => {
    const [pendingApprovalList, setPendingApprovalList] = useState([]);

	const handleLoadData = async () => {
        try {
            const response = await getAllPendingApproval();
            setPendingApprovalList(response.dataRes.data)
        } catch (error) {
            alert(error)
        }
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

	const handleSearchData = async (searchTerm) => {
        try {
            const response = await searchPendingApproval(searchTerm);
            console.log(response)
            //console.log(`Fetch data base on ${searchTerm}`);
        } catch (error) {
            alert(error)
        }
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
        pendingApprovalList,
    };
    
	return (
		<PendingApprovalContext.Provider value={contextValue}>
			{children}
		</PendingApprovalContext.Provider>
	);
};
