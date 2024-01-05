import { createContext, useContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { createUserInformation, deleteList, deleteUserInformation, getAllUser, searchUser, updateUserInformation } from "api/UserApi";
import { GlobalContext } from "./GlobalContext";

// @ts-ignore
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { currentItem, selectedData } = useContext(GlobalContext);

    const [userList, setUserList] = useState([])
    const handleLoadData = async () => {
        try {
            const response = await getAllUser();
            setUserList(response.dataRes.data)
        } catch (error) {
            alert(error)
        }
    };

    const handleCreateData = async (user) => {
        try {
            const response = await createUserInformation(user);
            if (response.status === 200) {
                const newUser = response.dataRes.data;
                setUserList([newUser, ...userList]);
            } else {
                alert(response.status);
            }
        } catch (error) {
            alert(error)
        }
    };


    const handleUpdateData = async (user) => {
        try {
            const response = await updateUserInformation(currentItem.id, user);
            if (response.status === 200) {
                const newUserList = [...userList];
                const index = newUserList.findIndex(user => user.id === currentItem.id);

                if (index !== -1) {
                    newUserList[index] = response.dataRes.data;
                }
                setUserList(newUserList);
            } else {
                alert(response.status);
            }
        } catch (error) {
            alert(error)
        }
    };

    const handleDeleteData = async () => {
        try {
            const response = await deleteUserInformation(currentItem.id);
            if (response.status === 200) {
                const updatedUserList = userList.filter(user => user.id !== currentItem.id);
                setUserList(updatedUserList);
            } else {
                alert(response.status);
            }
        } catch (error) {
            alert(error)
        }
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

    const handleDeleteList = async () => {
        try {
            const response = await deleteList(selectedData);
            if (response.status === 200) {
                const selectedIds = selectedData.map(item => item.id);
                const updatedUserList = userList.filter(user => !selectedIds.includes(user.id));
                setUserList(updatedUserList);
            } else {
                alert(response.status);
            }
        } catch (error) {
            alert(error)
        }
    };

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
