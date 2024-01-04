import { createContext, useState } from "react";
import CRUDContext from "./CRUDContext";
import { getAllPlaylist, searchPlaylist } from "api/PlaylistApi";

// @ts-ignore
export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
	const [playlistList, setPlaylistList] = useState([]);
    
    const handleLoadData = async () => {
        try {
            const response = await getAllPlaylist();
            setPlaylistList(response.dataRes.data)
        } catch (error) {   
            alert(error)
        }
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

	const handleSearchData = async (searchTerm) => {
		try {
            const response = await searchPlaylist(searchTerm);
            setPlaylistList(response.dataRes.data)
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
        playlistList,
    };
    
	return (
		<PlaylistContext.Provider value={contextValue}>
			{children}
		</PlaylistContext.Provider>
	);
};
