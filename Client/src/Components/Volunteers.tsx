/* eslint-disable react-refresh/only-export-components */
import Vol_card from "./Vol_card";
import Voll_Arr from '../data/organizers.ts'

const Vol = () => {
    return (
        <>
            <h1 className='text-center font-bold text-slate-800 text-2xl my-6'>Organizers</h1>
            <div className="p-6 bg-gray-100 min-h-screen h-auto flex flex-col items-center mt-4">
                {/* <h1 className="text-2xl font-bold text-slate-800 py-10">Monitoring Team</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 max-w-7xl w-full">
                    {Voll_Arr.map((vol) => (
                        (vol.positon === "Monitoring Team") ?
                            <Vol_card
                                name={vol.name}
                                section={vol.positon}
                                workSection={vol.section}
                                imgSrc={vol.image}
                            /> : null
                    ))}
                </div>
                {/* <h1 className="text-2xl font-bold text-slate-800 py-10">Media Team</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 max-w-7xl w-full">
                    {Voll_Arr.map((vol) => (
                        (vol.positon === "Media Team") ?
                            <Vol_card
                                name={vol.name}
                                section={vol.positon}
                                workSection={vol.section}
                                imgSrc={vol.image}
                            /> : null
                    ))}
                </div>
                {/* <h1 className="text-2xl font-bold text-slate-800 py-10">Distribution Team</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 max-w-7xl w-full">
                    {Voll_Arr.map((vol) => (
                        (vol.positon === "Distribution Team") ?
                            <Vol_card
                                name={vol.name}
                                section={vol.positon}
                                workSection={vol.section}
                                imgSrc={vol.image}
                            /> : null
                    ))}
                </div>
                {/* <h1 className="text-2xl font-bold text-slate-800 py-10">Lab Management Team</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-3 h-full  gap-6 max-w-7xl w-full">
                    {Voll_Arr.map((vol) => (
                        (vol.positon === "Lab Management Team") ?
                            <Vol_card
                                name={vol.name}
                                section={vol.positon}
                                workSection={vol.section}
                                imgSrc={vol.image}
                            /> : null
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vol;