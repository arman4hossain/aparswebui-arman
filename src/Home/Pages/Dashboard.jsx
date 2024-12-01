import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Dashcalnder from '../Dashboarditems/Mainitems/Dashcalender';
import Community from '../Dashboarditems/Mainitems/Community';
import Recentclass from '../Dashboarditems/Mainitems/Recentclass';
import Statistics from '../Dashboarditems/Rightsection/Statistics';
import Leaderboard from '../Dashboarditems/Rightsection/Leaderboard';

const Dashboard = () => {
    return (
        <div>
            <section>
                <div className='flex gap-2 items-center'>
                    <div className="avatar">
                        <div className="w-7 h-7 rounded">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Rifat Ahmed</a></li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center' >
                    <h1 className='text-2xl'>My dashboard</h1>
                    <div className='flex gap-2'>
                        <button className='px-4 py-3 rounded-xl border-2 border-gray-100  text-sm flex items-center text-[#4E4E4E] gap-2'><FontAwesomeIcon icon={faBell} /> Notifications</button>
                        <button className='px-4 py-3 rounded-xl border-2 border-gray-100  text-sm flex items-center text-[#4E4E4E] gap-2'>Visit store <FontAwesomeIcon icon={faUpRightFromSquare} /></button>
                    </div>
                </div>
                {/* Today's Date */}
                <div className='flex gap-4 w-fit my-5 items-center'>
                    <div className='flex flex-col text-center justify-center py-0 px-4 rounded-md border-gray-200 border-2'>
                        <h1>JAN</h1>
                        <h1>10</h1>
                    </div>
                    <div>
                        <h1>January 10, 2025 <span className='border-gray-200 border-2 px-1 rounded-md text-sm text-gray-500 font-medium'>Week 1</span></h1>
                        <h2>Friday</h2>
                    </div>
                </div>
            </section>
            <section className='flex gap-2'>
                {/* Main - Part */}
                <section className='w-9/12'>
                    <Dashcalnder></Dashcalnder>
                    <Community></Community>
                    <Recentclass></Recentclass>
                </section>
                {/* Rightside-Part */}
                <section className='3/12 flex flex-col gap-10 py-6'>
                    <Statistics></Statistics>
                    <Leaderboard></Leaderboard>
                </section>
            </section>
        </div>
    );
};

export default Dashboard;