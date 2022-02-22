import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Tags() {
    return (
        <div className="text-left">
            <Menu as="div" className="inline-block relative text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center py-2 px-4 pt-4 w-full text-sm font-medium text-gray-800 bg-white rounded-md border-2 border-slate-500 border-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-100">
                        タグの追加

                        <svg xmlns="http://www.w3.org/2000/svg" className="-mt-2 ml-2 w-8 h-8 tag_svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-1 mt-2 w-56 bg-white rounded-md divide-y divide-gray-100 focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right left-">
                        <div className="p-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z" /></svg>
                                        )}
                                        FRONTEND
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z" /><path d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z" /></svg>

                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z" /><path d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z" /></svg>
                                            </>
                                        )}
                                        BACKEND
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="p-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 5h-2V6h2zm4 0h-2V6h2zm1 5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 5h-2v-2h2zm4 0h-2v-2h2z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" ><path d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 5h-2V6h2zm4 0h-2V6h2zm1 5H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 5h-2v-2h2zm4 0h-2v-2h2z" /></svg>

                                        )}
                                        INFRA
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="p-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .357.078.696.214 1.005l-1.955 2.199A3.977 3.977 0 0 0 13 8c-.74 0-1.424.216-2.019.566L8.707 6.293l-.023.023C8.88 5.918 9 5.475 9 5a3 3 0 1 0-3 3c.475 0 .917-.12 1.316-.316l-.023.023L9.567 9.98A3.956 3.956 0 0 0 9 12c0 .997.38 1.899.985 2.601l-2.577 2.576A2.472 2.472 0 0 0 6.5 17C5.122 17 4 18.121 4 19.5S5.122 22 6.5 22 9 20.879 9 19.5c0-.321-.066-.626-.177-.909l2.838-2.838c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4 0-.636-.163-1.229-.428-1.764l2.117-2.383c.256.088.526.147.811.147C20.879 8 22 6.879 22 5.5S20.879 3 19.5 3zM13 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.5 3A2.502 2.502 0 0 0 17 5.5c0 .357.078.696.214 1.005l-1.955 2.199A3.977 3.977 0 0 0 13 8c-.74 0-1.424.216-2.019.566L8.707 6.293l-.023.023C8.88 5.918 9 5.475 9 5a3 3 0 1 0-3 3c.475 0 .917-.12 1.316-.316l-.023.023L9.567 9.98A3.956 3.956 0 0 0 9 12c0 .997.38 1.899.985 2.601l-2.577 2.576A2.472 2.472 0 0 0 6.5 17C5.122 17 4 18.121 4 19.5S5.122 22 6.5 22 9 20.879 9 19.5c0-.321-.066-.626-.177-.909l2.838-2.838c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4 0-.636-.163-1.229-.428-1.764l2.117-2.383c.256.088.526.147.811.147C20.879 8 22 6.879 22 5.5S20.879 3 19.5 3zM13 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" /></svg>
                                        )}
                                        NETWORK
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z" /></svg>

                                        )}
                                        SECURITY
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z" /></svg>
                                        )}
                                        MOBILE
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z" /></svg>
                                        )}
                                        DESIGN
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888z" /></svg>
                                        )}
                                        CLOUD
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M7.999 22h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2zm-5-15h2V5h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2V9h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M7.999 22h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2zm-5-15h2V5h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2V9h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1z" /></svg>
                                        )}
                                        HARDWARE
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.956 4.956 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15zM17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" /></svg>
                                        )}
                                        DEVOPS
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 7v1l11 4 9-4V7L11 4z" /><path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 7v1l11 4 9-4V7L11 4z" /><path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z" /></svg>
                                        )}
                                        STUDENT
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z" /><circle cx="8.5" cy="12.5" r="1.5" /><circle cx="15.5" cy="12.5" r="1.5" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z" /><circle cx="8.5" cy="12.5" r="1.5" /><circle cx="15.5" cy="12.5" r="1.5" /></svg>
                                        )}
                                        BEGINNER
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" /><path d="M14.948 7.684A.997.997 0 0 0 14 7h-4a.998.998 0 0 0-.948.684l-2 6 1.775.593L8 18h2v4h4v-4h2l-.827-3.724 1.775-.593-2-5.999z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="4" r="2" /><path d="M14.948 7.684A.997.997 0 0 0 14 7h-4a.998.998 0 0 0-.948.684l-2 6 1.775.593L8 18h2v4h4v-4h2l-.827-3.724 1.775-.593-2-5.999z" /></svg>
                                        )}
                                        WOMAN
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M7 14.001h2v2H7z" /><path d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M7 14.001h2v2H7z" /><path d="M19 2h-8a2 2 0 0 0-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zM5 20v-8h6v8H5zm9-12h-2V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z" /></svg>
                                        )}
                                        COMPANY
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-slate-700 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z" /><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z" /><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z" /></svg>
                                        )}
                                        GROUP
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
