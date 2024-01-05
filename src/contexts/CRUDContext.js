// CRUDContext.js
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const CRUDContext = (loadData, createData, updateData, deleteData, searchData, exportData, deleteList) => {
	const [isDataChange, setDataChange] = useState(false);
    const { modalMode } = useContext(GlobalContext);

	const handleLoadData = () => {
		loadData();
	};

	const handleSaveData = (item) => {
        if (modalMode === 'add') {
            createData(item);
        } else if (modalMode === 'update') {
            updateData(item);
        }
	};

	const handleDeleteData = () => {
		deleteData();       
	};

	const handleSearchData = (searchTerm) => {
		searchData(searchTerm);
	};

    const handleExportData = () => {
        exportData();
    }

    const handleDeleteList = () => { 
        deleteList();
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
