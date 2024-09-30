const Vol_card = ({ name, section, workSection, imgSrc }) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out flex flex-col md:flex-row md:items-center">
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={imgSrc}
                alt={`${name}'s work`}
            />
            <div className="flex flex-col justify-between px-4 md:px-6 py-4 leading-normal ">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-800">{name}</h5>
                <p className="mb-1 text-sm font-medium text-slate-600">{section}</p>
                <p className="font-normal text-slate-500">{`Section-${workSection}`}</p>
            </div>
        </div>
    );
}

export default Vol_card;
