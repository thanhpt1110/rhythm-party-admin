import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import englishImage from '../../assets/english.png';
import vietnameseImage from '../../assets/vietnamese.png';

const Header = () => {
    return (
        <div className='h-20 px-5 flex items-center flex-row-reverse border-b border-zinc-300'>  
            {/* language */}
            <div className='text-2xl flex items-center gap-6'>
                <Popover className="relative">
                    {({ open }) => (
                        // <> Đây là viết tắt của 1 fragment
                        <>
                            {/* Icon để click mở */}
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-200',
                                    'group inline-flex items-center rounded-md p-1.5 hover:bg-gray-200 hover:text-gray-600'
                                )}
                            >
                                <i className='ri-global-line' />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 mt-1 z-10 transform w-40">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 flex items-center">
                                        <div className="flex flex-col ml-2 py-1">
                                            {[
                                                { image: englishImage, label: 'English' },
                                                { image: vietnameseImage, label: 'Vietnamese' }
                                            ].map(({ image, label }, index) => (
                                                <div key={index} className='flex flex-row items-center gap-2 mb-2 cursor-pointer'>
                                                    <img src={image} alt={`${label} Logo`} className="h-8 w-8 object-contain" />
                                                    <div className="ml-2 text-sm">{label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>

                            </Transition>
                        </>
                    )}
                </Popover>

                {/* avatar */}
                <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" data-tooltip-offset="10" type="button">
                    <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                    >
                    </div>
                </button>

                <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-4 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Phan Tuấn Thành
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

            </div>
        </div>
    )
}

export default Header