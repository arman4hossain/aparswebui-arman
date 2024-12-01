import React from "react";

const Leaderboard = () => {
    // Data stored directly inside the React component
    const data = [
        {
            id: 1,
            name: "Phoenix Baker",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40", // Replace with actual image URLs
            status: "online"
        },
        {
            id: 2,
            name: "Lana Steiner",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "online"
        },
        {
            id: 3,
            name: "Demi Wilkinson",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "offline"
        },
        {
            id: 4,
            name: "Candice Wu",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "offline"
        },
        {
            id: 5,
            name: "Natali Craig",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "online"
        },
        {
            id: 6,
            name: "Orlando Diggs",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "online"
        },
        {
            id: 7,
            name: "Drew Cano",
            batch: "ACS Varsity Batch 2024",
            image: "https://via.placeholder.com/40",
            status: "online"
        }
    ];

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
            <ul className="space-y-4">
                {data.map((person) => (
                    <li key={person.id} className="flex items-center gap-4">
                        {/* Profile image */}
                        <div className="avatar online">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-10 h-10 rounded-full"
                            />
                        </div>
                        {/* Name and batch */}
                        <div>
                            <p className="font-semibold">{person.name}</p>
                            <p className="text-gray-500 text-sm">{person.batch}</p>
                        </div>
                        {/* Status dot */}
                        {person.status === "online" && (
                            <span className="ml-auto w-3 h-3 bg-green-600 rounded-full"></span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
