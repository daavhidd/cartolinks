'use client'

import React, { useState } from 'react';
import { FaUser, FaBell, FaBars, FaTimes, FaChevronDown, FaLayerGroup, FaRegImage, FaFolder } from "react-icons/fa";
import { FaVideo } from 'react-icons/fa6';
import { GiFireworkRocket } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import { ImMagicWand } from 'react-icons/im';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';
import { PiCompassToolBold } from 'react-icons/pi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';

type HeaderProps = {
    theme: string;
    toggleTheme: () => void;
}; 

const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState('Version 1');
    const [activeNavItem, setActiveNavItem] = useState('home');


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navItems = [ 
        { id: 'home', icon: GoHomeFill, label: 'Home' },
        { id: 'camera', icon: FaRegImage, label: 'Camera' },
        { id: 'video', icon: FaVideo, label: 'Video' },
        { id: 'enhance', icon: ImMagicWand, label: 'Enhance' },
        { id: 'realtime', icon: GiFireworkRocket, label: 'Realtime' },
        { id: 'edit', icon: PiCompassToolBold, label: 'Edit' },
        { id: 'files', icon: FaFolder, label: 'Files' },
        
    ];

    return (
        <div>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black px-6 py-6 transition-colors duration-200">
                <div className="flex items-center justify-between w-full mx-auto">
                    <div className="hidden lg:grid lg:grid-cols-3 items-center w-full">
                        <div className="flex items-center space-x-3">
                            <FaLayerGroup className="size-5 text-gray-700 dark:text-gray-300" />
                            <div className="size-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                            <div className="relative">
                                <button
                                    onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
                                    className="flex items-center space-x-1.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    <span className="font-medium text-sm">{selectedVersion}</span>
                                    <FaChevronDown className={`size-3 transition-transform duration-200 ${versionDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                        
                                {versionDropdownOpen && (
                                    <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-1 min-w-[110px] z-50">
                                        {['Version 1', 'Version 2'].map((version) => (
                                            <button
                                            key={version}
                                            onClick={() => {
                                                setSelectedVersion(version);
                                                setVersionDropdownOpen(false);
                                            }}
                                            className="w-full px-3 py-1.5 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                            {version}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 flex items-center space-x-2">
                                {navItems.map((item) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveNavItem(item.id)}
                                            className={`px-4 py-2 cursor-pointer text-black dark:text-white rounded-xl transition-all duration-200 ${
                                            activeNavItem === item.id
                                                ? 'bg-white dark:bg-black shadow-sm'
                                                : 'hover:bg-white dark:hover:bg-black'
                                            }`}
                                        >
                                            <IconComponent className="size-4" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex items-center justify-end space-x-2">
                            <button className="cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 text-black dark:text-white rounded-xl text-sm transition-colors duration-200">
                                <FaRegImage className="size-3" />
                                <span className="font-medium">Gallery</span>
                            </button>
                            
                            <button className="cursor-pointer flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 text-black dark:text-white rounded-xl text-sm transition-colors duration-200">
                                <TfiHeadphoneAlt className="size-3" />
                                <span className="font-medium">Support</span>
                            </button>
                            
                            <button className="cursor-pointer py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl transition-all duration-200">
                                <FaBell className="size-4" />
                            </button>
                            
                            <button
                                onClick={toggleTheme}
                                className="cursor-pointer py-2 px-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 active:scale-95"
                            >
                                {theme === "light" ? (
                                    <IoMoonSharp className="size-4 text-gray-600 dark:text-gray-400 transition-transform duration-200" />
                                ) : (
                                    <IoSunnySharp className="size-4 text-yellow-500 transition-transform duration-200" />
                                )}
                            </button>
                            
                            <div className="size-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                            <FaLayerGroup className="size-5 text-gray-700 dark:text-gray-300" />
                            <div className="size-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={toggleTheme}
                                className="p-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200"
                            >
                                {theme === "light" ? (
                                    <IoMoonSharp className="size-4 text-gray-600 dark:text-gray-400" />
                                ) : (
                                    <IoSunnySharp className="size-4 text-yellow-500" />
                                )}
                            </button>
                            
                            <button
                                onClick={toggleMobileMenu}
                                className="p-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200"
                            >
                                {mobileMenuOpen ? (
                                    <FaTimes className="size-5 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <FaBars className="size-5 text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white dark:bg-black transition-transform duration-300 ease-in-out z-40 ${
                mobileMenuOpen ? 'translate-y-0' : '-translate-y-full' }`}
            >
                <div className="p-4 space-y-3 h-full overflow-y-auto">
                
                    <div className="relative">
                        <button
                            onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-md text-sm text-gray-700 dark:text-gray-300"
                        >
                            <span className="font-medium">{selectedVersion}</span>
                            <FaChevronDown className={`size-3 transition-transform duration-200 ${versionDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {versionDropdownOpen && (
                            <div className="mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1">
                                {['Version 1', 'Version 2'].map((version) => (
                                    <button
                                        key={version}
                                        onClick={() => {
                                            setSelectedVersion(version);
                                            setVersionDropdownOpen(false);
                                        }}
                                        className="w-full px-3 py-1.5 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {version}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveNavItem(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                                        activeNavItem === item.id
                                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    <IconComponent className="size-4" />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md text-sm transition-colors duration-200">
                            <FaRegImage className="size-4" />
                            <span className="font-medium">Gallery</span>
                        </button>
                        
                        <div className="flex space-x-2">
                            <button className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md text-sm transition-colors duration-200">
                                <TfiHeadphoneAlt className="size-3.5" />
                                <span className="font-medium">Support</span>
                            </button>
                            
                            <button className="px-3 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md transition-all duration-200">
                                <FaBell className="size-4" />
                            </button>
                            
                            <button className="px-3 py-2.5 bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-md transition-colors duration-200">
                                <FaUser className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;