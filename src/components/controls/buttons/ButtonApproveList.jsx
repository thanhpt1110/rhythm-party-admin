import { GlobalContext } from 'contexts/GlobalContext';
import { PendingApprovalContext } from 'contexts/PendingApprovalContext';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const ButtonApproveList = () => {
    const { selectedItems } = useContext(GlobalContext);
    const { handleApproveList } = useContext(PendingApprovalContext);

    const handleOnClick = () => {
        if (selectedItems.length !== 0) {
            Swal.fire({
                title: "Approval warning",
                text: "You are about to approve these items. Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#046C4E",
                cancelButtonColor: "#d33",
                confirmButtonText: "Approve",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        handleApproveList();
                        toast.success('Approve songs successful!');
                    } catch (error) {
                        toast.error(error);
                    }
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
            <i onClick={handleOnClick} className="ri-checkbox-circle-fill text-2xl text-green-600 cursor-pointer"/>
        </div>
    )
}

export default ButtonApproveList