import React from 'react'

const ButtonSave = ({onClick, children}) => {
    return (
        <div>
            <button type="button" className="w-full inline-flex justify-center rounded-md 
            border-2 border-blue-600 px-4 py-2 
            bg-blue-700 text-base font-medium text-white 
            hover:bg-blue-600 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
            sm:ml-3 sm:w-auto sm:text-sm" 
                    onClick={onClick}>
                    {children}  
            </button>
        </div>
    )
}

export default ButtonSave