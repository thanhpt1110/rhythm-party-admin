import { GlobalContext } from 'contexts/GlobalContext';
import React, { useContext } from 'react'
import Swal from 'sweetalert2'

const ButtonDeleteList = () => {
    const { selectedItems } = useContext(GlobalContext);
    const handleOnClick = () => {
        if (selectedItems.length !== 0) {
            Swal.fire({
                title: "Deletion warning",
                text: "You are about to delete these items. Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(selectedItems);
                }
            });
        } else {
            Swal.fire({
                title: "",
                text: "Please choose at least one item to proceed!",
                icon: "error"
            });
        }
    }

    return (
        <div>
            <i onClick={handleOnClick} className="ri-delete-bin-6-line text-2xl text-red-600 cursor-pointer" />
        </div>
    )
}

export default ButtonDeleteList