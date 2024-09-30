import { useEffect, useState } from 'react';

const AboutUs = ({ visible, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    return (
        visible && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div
                    className={`relative bg-white rounded-lg shadow-lg transition-all ${isMaximized ? 'w-full h-full' : 'w-1/2'
                        }`}
                    style={{ maxHeight: '90vh' }}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-semibold">About Us</h2>
                        <div className="flex space-x-2">
                            {/* Maximize Button */}
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={toggleMaximize}
                                title="Maximize/Restore"
                            >
                                {isMaximized ? '🔽' : '🗖'}
                            </button>
                            {/* Close Button */}
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={onClose}
                                title="Close"
                            >
                                ✖️
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default AboutUs;
