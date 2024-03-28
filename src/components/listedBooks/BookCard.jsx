import PropTypes from 'prop-types';
import loci from '../../assets/loc.png'
import pepi from '../../assets/pep.png'
import readi from '../../assets/read.png'
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing } = book;

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/book/${book.bookId}`);
    };

    return (
        <div className="w-full p-4 border border-[#13131326] rounded-2xl mt-6 md:flex flex-row gap-5">
            <div className='md:w-2/5 lg:w-1/5 bg-[#1313130D] rounded-2xl p-4 flex justify-center items-center'>
                <img src={image} alt="ami" />
            </div>
            <div className='md:3/5 lg:w-4/5'>
                <div className='border-b border-b-[#13131326] flex flex-col gap-5 pb-4'>
                    <div><p className=' text-2xl font-bold text-[#131313]'>{bookName}</p></div>
                    <div><p className='text-[16px] font-medium text-[]'>By : {author}</p></div>
                    <div className='md:flex gap-4 flex-row items-center'>
                        <p className='text-[16px] font-bold text-[#131313]'>Tag</p>
                        {
                            tags.map(tag => (<p className='bg-[#17BE0A0D] w-fit rounded-3xl text-[16px] text-center text-[#17BE0A] font-medium px-5 py-2' key={tag.id}># {tag}</p>))

                        }
                        <div className='flex flex-row gap-2'>
                            <img src={loci} alt="" />
                            <p className='font-normal text-lg text-[#131313CC]'>Year of Publishing: {yearOfPublishing}</p>

                        </div>

                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-row gap-2'>
                            <img src={pepi} alt="" />
                            <p className='text-[#13131399] font-normal text-[16px]'>Publisher: {publisher}</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <img src={readi} alt="" />
                            <p className='text-[#13131399] font-normal text-[16px]'>Page {totalPages}</p>
                        </div>
                    </div>

                </div>
                <div className='mt-4 flex flex-col md:flex-row gap-3'>
                    <div className='bg-[#328EFF26] px-3 py-2 rounded-[30px] text-center flex flex-row items-center justify-center'>
                        <p className='text-[16px] font-normal text-[#328EFF]'>Category: {category}</p>
                    </div>

                    <div className='bg-[#FFAC3326] px-3 py-2 rounded-[30px] text-center flex flex-row items-center justify-center'>
                        <p className='text-[16px] font-normal text-[#FFAC33]'>Rating: {rating}</p>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <a className="btn btn-primary bg-[#23BE0A] rounded-[30px] border-0 text-white text-center text-lg font-medium hover:bg-green-900" onClick={handleViewDetails}>View Details</a>
                    </div>
                </div>

            </div>
        </div>
    );
};


BookCard.propTypes = {
    book: PropTypes.object.isRequired,

};
export default BookCard;