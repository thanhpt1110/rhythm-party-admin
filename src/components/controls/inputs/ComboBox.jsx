import React, { memo, useState } from 'react';

const ComboBox = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className="flex flex-col items-center w-full max-w-xs mx-auto">
            <div className="relative w-full">
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-4 py-2 text-base text-violet-900 border-violet-950 border-2 rounded-lg focus:shadow-outline"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default memo(ComboBox)
