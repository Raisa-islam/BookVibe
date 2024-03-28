import PropTypes from 'prop-types';
import starImg from '../../assets/star.png'
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing } = book;
    return (

        <>
            <Link to={`/book/${bookId}`}>
                <div className="card w-80 md:w-96 bg-white border border-[#13131326] p-6">
                    <div className='flex flex-row justify-center items-center bg-[#F3F3F3] rounded-xl py-6'>
                        <img src={image} alt="" className="w-28 h-40" />
                    </div>
                    <div className="text-left">
                        <div className=' pb-5 border-dashed border-b-[1px] border-[#13131326]'>
                            <div className='flex flex-row gap-2 mt-6'>
                                {
                                    tags.map(tag => (<p className='bg-[#17BE0A0D] w-fit rounded-3xl text-[16px] text-center text-[#17BE0A] font-medium px-5 py-2' key={tag.id}> {tag}</p>))
                                }
                            </div>

                            <h2 className="card-title mt-6 text-2xl font-bold text-[#131313]">{bookName}</h2>
                            <p className='mt-4 text-[16px] font-medium text-[#131313CC]'>By : {author}</p>
                        </div>

                        <div className="flex flex-row justify-between mt-5 text-[16px] font-medium text-[#131313CC]">
                            <div className=''>{category}</div>
                            <div className='flex flex-row gap-3'>
                                {rating}
                                <img src={starImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,

};
export default Book;