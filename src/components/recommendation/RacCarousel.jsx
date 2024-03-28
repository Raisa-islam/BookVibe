import React from 'react';
import PropTypes from 'prop-types';
const RacCarousel = ({ book }) => {
    const {
        bookName,
        author,
        image,
        totalPages,
        rating,
        category, } = book;
    return (
        <div className="carousel-item w-full flex flex-col gap-5 justify-center items-center">
            <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
            <div>
                <div><p className=' text-2xl font-bold text-[#131313] text-center'>{bookName}</p></div>

                <div><p className='text-[16px] font-medium text-[] text-center'>By : {author}</p></div>
                <div><p className='text-[16px] font-medium text-center text-red-500'>Rating: {rating}</p></div>
            </div>
        </div>
    );
};
RacCarousel.propTypes = {
    book: PropTypes.object.isRequired,

};

export default RacCarousel;