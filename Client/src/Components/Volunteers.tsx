/* eslint-disable react-refresh/only-export-components */
import Vol_card from "./Vol_card";

const Vol = () => {
    return (
        <>
            <h1 className='text-center font-bold text-slate-800 text-2xl my-6'>Organizers</h1>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 max-w-7xl w-full">
                    <Vol_card
                        name="Anas Ibn Belal"
                        section="Media Team"
                        workSection="10"
                        imgSrc="https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAYdm-n56MyvwG5svQ57Z7WB8DaxSqwACyxEAAorz0VcGf_uGDx9fLTYE"
                    />
                </div>
            </div>
        </>
    );
};

export default Vol;