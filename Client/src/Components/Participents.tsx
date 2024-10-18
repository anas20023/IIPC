import { useState, useEffect } from 'react';
import PT_Card from './PT_card';

const PT = () => {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await fetch('https://iipc-usjg.vercel.app/api/participants');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setParticipants(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchParticipants();
    }, []);

    // Enhanced Loader with animation
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
                    <p className="text-blue-600 mt-4 text-lg font-semibold animate-pulse">
                        Loading Participants...
                    </p>
                </div>
            </div>
        );
    }

    if (error) return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

    return (
        <>
            <h1 className="text-center font-extrabold text-slate-800 text-3xl mt-6">
                Participants
            </h1>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 max-w-7xl">
                    {participants.map(participant => (
                        <PT_Card
                            key={participant.StudentID} // Ensure unique keys for React performance
                            name={participant.Name}
                            section={participant.Section}
                            studentId={participant.StudentID}
                            linkTo={"#"}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PT;
