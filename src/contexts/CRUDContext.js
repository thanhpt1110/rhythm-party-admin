// CRUDContext.js
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const CRUDContext = (loadData, createData, updateData, deleteData, searchData, exportData, deleteList) => {
    const [data, setData] = useState([]);
	const [isDataChange, setDataChange] = useState(false);
    const { modalMode, currentItem, selectedItems } = useContext(GlobalContext);

	const handleLoadData = () => {
		loadData();
	};

	const handleSaveData = () => {
        if (modalMode === 'add') {
            createData();
        } else if (modalMode === 'update') {
            updateData(currentItem);
        }
		//setDataChange(true);
	};

	const handleDeleteData = () => {
		deleteData(currentItem);       
        //setDataChange(true); 
	};

	const handleSearchData = (searchTerm) => {
		searchData(searchTerm);
	};

    const handleExportData = () => {
        exportData();
    }

    const handleDeleteList = () => { 
        deleteList(selectedItems);
    }

	return {
		isDataChange,
		setDataChange,
		handleLoadData,
		handleSearchData,
		handleSaveData,
		handleDeleteData,
        handleExportData,
        handleDeleteList,
	};
};

export default CRUDContext;
