import { createContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { getAllUser, searchUser } from "api/UserApi";

// @ts-ignore
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userList, setUserList] = useState([])
    const handleLoadData = async () => {
        try {
            const response = await getAllUser();
            setUserList(response.dataRes.data)
        } catch (error) {   
            alert(error)
        }
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

	const handleSearchData = async (searchTerm) => {
        try {
            const response = await searchUser(searchTerm);
            setUserList(response.dataRes.data)
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
        userList,
    };

	return (
		<UserContext.Provider value={contextValue}>
			{children}
		</UserContext.Provider>
	);
};
