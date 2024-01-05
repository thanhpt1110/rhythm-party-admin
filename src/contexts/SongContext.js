import { createContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { getAllMusic, searchAllMusic } from "api/MusicApi";

// @ts-ignore
export const SongContext = createContext();

export const SongProvider = ({ children }) => {
	const [songList, setSongList] = useState([])
    
    const handleLoadData = async () => {
        try {
            const response = await getAllMusic();
            setSongList(response.dataRes.data)
        } catch (error) {   
            alert(error)
        }
    };

	const handleCreateData = () => {
		console.log("Save data from Add Song");
	};

	const handleUpdateData = (currentItem) => {
		console.log("Save data from Edit Song: ", currentItem);
	};

	const handleDeleteData = (currentItem) => {
		console.log("Delete data from Song: ", currentItem);
	};  

	const handleSearchData = async (searchTerm) => {
		try {
            const response = await searchAllMusic(searchTerm);
            setSongList(response.dataRes.data)
        } catch (error) {
            alert(error)
        }
	};

    const handleExportData = () => {
		console.log("Export data successfully");
	};

    const handleDeleteList = () => {
        console.log();
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
        songList,
    };

	return (
		<SongContext.Provider value={contextValue}>
			{children}
		</SongContext.Provider>
	);
};
