import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    avatarUrl?: string; // Optional avatar image URL
    name: string;
    section: string;
    studentId: string;
    linkTo: string; // Route to navigate to when the card is clicked
}

const Card: React.FC<CardProps> = ({ avatarUrl, name, section, studentId, linkTo }) => {
    return (
        <Link to={linkTo} className="block">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden">
                <div className="flex items-center p-4 border-b border-gray-200">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        {avatarUrl ? (
                            <img
                                src={avatarUrl}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-600 text-3xl">👤</span> // Placeholder avatar
                        )}
                    </div>
                    <div className="ml-4 flex-1">
                        <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
                        <p className="text-sm text-gray-600">Section: {section}</p>
                        <p className="text-sm text-gray-500">ID: {studentId}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
