import { useNavigate } from 'react-router-dom';
import banImg from '../../assets/pngwing 1.png'
const Banner = () => {
    const navigate = useNavigate();

    const handleViewList = () => {
        navigate('/listed-books');
    };
    return (
        <div className='rounded-3xl bg-[#13131305] flex flex-row justify-between items-center p-4 md:p-24 mt-12 text-black'>
            <div>
                <p className='text-2xl md:text-4xl lg:text-6xl font-bold'>Books to freshen up your bookshelf</p>
                <button className='btn btn-primary bg-[#23BE0A] rounded-lg border-0 text-white mt-7 hover:bg-green-600' onClick={handleViewList}>View The List</button>
            </div>
            <div>
                <img src={banImg} alt="" className='w-64 h-64' />
            </div>
            
        </div>
    );
};

export default Banner;