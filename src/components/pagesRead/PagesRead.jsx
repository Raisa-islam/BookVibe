import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import { useEffect, useState } from 'react';
import { getStoredAddBookOtpion } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import TriangleBar from './TriangleBar';

const PagesRead = () => {
    const [Rbook, setRbook] = useState([]);
    const books = useLoaderData();

    useEffect(() => {
        const storedBook = getStoredAddBookOtpion();
        console.log("Books from file:", books);
        console.log("IDs from local storage:", storedBook);

        if (books.length > 0) {
            const ReadBook = books.filter(book => storedBook.includes(book.bookId));
            console.log("Filtered books:", ReadBook);
            setRbook(ReadBook);
        }
    }, [books]);

    return (
        <div className='bg-[#0d0d0d08] max-w-[85%] mx-auto flex justify-center items-center py-12 mt-8 rounded-3xl'>
            <BarChart width={1000} height={400} data={Rbook}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <CartesianGrid />
                <Bar
                    dataKey="totalPages"
                    shape={<TriangleBar />} 
                    label={{ position: 'top' }}
                >
                    {Rbook.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesRead;
