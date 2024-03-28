import arrow from '../../assets/downarrow.png'
import RWnav from './RWnav';

const ListedBooks = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <div className='rounded-2xl bg-[#13131305] py-8 w-full text-center'><h1 className='text-3xl font-bold'>Books</h1></div>

                <details className="dropdown mt-6">
                    <summary className="m-1 btn btn-primary bg-[#23BE0A] rounded-lg border-0 text-white hover:bg-green-700">Sort By <img src={arrow} alt="" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number Of Pages</a></li>
                        <li><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            <div className='mt-8'>
                <RWnav></RWnav>

            </div>

        </div>
    );
};

export default ListedBooks;