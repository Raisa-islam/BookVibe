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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-left">
                        <div className=' pb-4 border-dashed border-b-[1px] border-[#13131326]'>
                            <div className='flex flex-row gap-2'>
                                {
                                    tags.map(tag => (<p className='bg-blue-500 w-fit'> {tag}</p>))
                                }
                            </div>

                            <h2 className="card-title">{bookName}</h2>
                            <p>By : {author}</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div>{category}</div>
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