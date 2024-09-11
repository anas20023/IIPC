/* eslint-disable react-refresh/only-export-components */
import PT_Card from './PT_card'
const Vol = () => {
    return (
        <>
            <h1 className='text-center font-bold text-slate-800 text-2xl'>Volunteers</h1>
            <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 min-w-7xl max-w-7xl">
                    <PT_Card name="John Doe" section="A" studentId="123456" linkTo="#" />
                    <PT_Card name="Jane Doe" section="B" studentId="654321" linkTo="#" />
                    <PT_Card name="John Smith" section="C" studentId="456123" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                    <PT_Card name="Jane Smith" section="D" studentId="321654" linkTo="#" />
                </div>
            </div></>
    )
}
export default Vol;