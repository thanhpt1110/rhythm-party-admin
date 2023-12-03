// CRUDContext.js
import { useState } from "react";

const CRUDContext = (loadData, createData, updateData, deleteData, searchData, exportData) => {
	const [contextType, setContextType] = useState([null])
    const [data, setData] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);
	const [isDataChange, setDataChange] = useState(false);
	const [modalMode, setModalMode] = useState("add");

	const handleLoadData = () => {
		loadData();
	};

	const handleSaveData = () => {
        if (modalMode === 'add') {
            createData();
        } else if (modalMode === 'update') {
            updateData();
        }
		setDataChange(true);
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

	return {
        contextType, 
        setContextType,
		currentItem,
		setCurrentItem,
		isDataChange,
		setDataChange,
		modalMode,
		setModalMode,
		handleLoadData,
		handleSearchData,
		handleSaveData,
		handleDeleteData,
        handleExportData,
	};
};

export default CRUDContext;
