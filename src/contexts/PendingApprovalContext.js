import { createContext, useContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { GlobalContext } from "./GlobalContext";
import { approveSong, denySong, getAllPendingApproval, searchPendingApproval } from "api/MusicApi";
// @ts-ignore
export const PendingApprovalContext = createContext();

export const PendingApprovalProvider = ({ children }) => {
    const [pendingApprovalList, setPendingApprovalList] = useState([]);
    const { currentItem, selectedData } = useContext(GlobalContext);

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

    const handleUpdateData = async (currentItem) => {
        const response = currentItem.isApprove ? await approveSong(currentItem.id) : await denySong(currentItem.id);
        if(response.status === 200)
        {
            const index = pendingApprovalList.findIndex(item => item.id === currentItem.id);
            if (index !== -1) {
                pendingApprovalList.splice(index, 1);
                setPendingApprovalList([...pendingApprovalList]);
            }
        }
        console.log("Approve current item: ", currentItem);
    };

    const handleDeleteData = (currentItem) => {
        try {
            const index = pendingApprovalList.findIndex(item => item.id === currentItem.id);
            if (index !== -1) {
                pendingApprovalList.splice(index, 1);
                setPendingApprovalList([...pendingApprovalList]);
            }
        } catch (error) {
            alert(error);
        }
    };

    const handleSearchData = async (searchTerm) => {
        try {
            const response = await searchPendingApproval(searchTerm);
            setPendingApprovalList(response.dataRes.data)
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

    const handleApproveList = () => {
        console.log(selectedData)
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
