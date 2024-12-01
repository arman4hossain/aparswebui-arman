import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faWindowMaximize, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <div className='p-4'>
                <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white text-base-content min-h-full w-70 p-4 justify-between">
                    {/* Sidebar content here */}
                    <div>
                        <div className='pb-5 mx-auto w-auto'>
                            <img src="/src/assets/Logo.png" alt="Apars-image" />
                        </div>
                        <div className='flex flex-col gap-2 pb-5'>
                            <h1 className='text-gray-400 '> General</h1>
                            <button className='rounded-lg px-4 py-3 bg-gray-100 border-gray-100  w-full text-left  justify-start'><FontAwesomeIcon icon={faTableColumns} /> Dashboard</button>
                            <button className='rounded-lg px-4 py-3 border-2 border-gray-100  bg-white w-full text-left  justify-start'><FontAwesomeIcon icon={faWindowMaximize} /> Courses</button>
                            <button className='rounded-lg px-4 py-3 border-2 border-gray-100  bg-white w-full text-left justify-start'><FontAwesomeIcon icon={faCalendarDays} /> Calender</button>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-gray-400 '> Materials</h1>
                            <button className='rounded-lg px-4 py-3 bg-gray-100 border-gray-100  w-full text-left  justify-start'><FontAwesomeIcon icon={faTableColumns} />  Classes</button>
                            <button className='rounded-lg px-4 py-3 border-2 border-gray-100  bg-white w-full text-left justify-start'><FontAwesomeIcon icon={faWindowMaximize} /> Exams</button>
                        </div>
                    </div>
                    {/* Download Section */}
                    <div className='flex flex-col gap-2 py-5'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-gray-400 '> Downloads</h1>
                            <p className='py-0 px-1.5 border-2 rounded-lg border-gray-300'>8</p>
                        </div>
                        <div className='flex gap-3 justify-between px-2 py-2 border-2 border-gray-100 rounded-2xl'>
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-medium'>Rifat Ahmed</h1>
                                <h2 className='text-gray-600 text-sm'>rifat@aparsclassroo.com</h2>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Home;