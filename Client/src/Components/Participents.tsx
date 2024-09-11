import { useState, useEffect } from 'react';
import PT_Card from './PT_card';

const PT = () => {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await fetch('https://iipc-5djy.vercel.app/api/participants');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                console.log(data);
                setParticipants(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchParticipants();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h1 className='text-center font-bold text-slate-800 text-2xl'>Participants</h1>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl">
                    {participants.map(participant => (
                        <PT_Card
                            key={Math.random()} // Assuming studentId is unique
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
