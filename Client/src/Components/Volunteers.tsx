/* eslint-disable react-refresh/only-export-components */
import PT_Card from './PT_card';

const Vol = () => {
    return (
        <>
            <h1 className='text-center font-bold text-slate-800 text-2xl my-6'>Volunteers</h1>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-4">
                <div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
                    <PT_Card name="John Doe" section="A" studentId="123456" linkTo="#" />
                    <PT_Card name="Jane Doe" section="B" studentId="654321" linkTo="#" />
                    <PT_Card name="John Smith" section="C" studentId="456123" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Mike Johnson" section="E" studentId="987654" linkTo="#" />
                    <PT_Card name="Emily Davis" section="F" studentId="147258" linkTo="#" />
                    <PT_Card name="Chris Evans" section="G" studentId="369258" linkTo="#" />
                    <PT_Card name="Natalie Portman" section="H" studentId="951753" linkTo="#" />
                    <PT_Card name="Robert Downey" section="I" studentId="159753" linkTo="#" />
                </div>
            </div>
        </>
    );
};

export default Vol;
