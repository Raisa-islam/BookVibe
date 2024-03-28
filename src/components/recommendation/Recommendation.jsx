import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { filterByProperty } from "../../utility/localstorage";
import RacCarousel from "./RacCarousel";


const Recommendation = () => {
    const [bookR, setbookR] = useState([]);
    const books = useLoaderData();
    useEffect(() => {
        setbookR(filterByProperty(books, 'rating', 4.5));
        console.log(bookR)
    }, []);
    return (
        <div className='mt-6 md:mt-12'>
            <div className="flex justify-center items-center w-full p-4 text-3xl font-bold text-[#23BE0A]">
                Trending Books
            </div>
            <div className="flex justify-center items-center">
                <div className="w-64 carousel rounded-box">
                   {
                        bookR.map(book => (
                            <RacCarousel key={book.bookId} book={book}></RacCarousel>
                         ))
                   }
                </div>
            </div>
        </div>
    );
};

export default Recommendation;