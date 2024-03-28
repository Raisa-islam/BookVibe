import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { checkIsInReadList, removeFromWishList, saveAddBookOption, saveWishBookOption } from "../../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams()
    //console.log(books)
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)
    console.log(book)
    const addRead = ()=>{
        if(saveAddBookOption(idInt)){
            toast('Book added to read list!')
            removeFromWishList(idInt)
        }
        else{
            toast('Book is already in read list!')
        }
        
    } 

    const addWish = ()=>{
        if(checkIsInReadList(idInt) === 1){
            if(saveWishBookOption(idInt)){
               
                toast('Book added to wish list!')
                
                
            }
            else{
                toast('Book is already in wish list!')
            }
        }
        else{
            toast('Book is in the read list!')
        }
       
        
    } 
    return (
        <div className="mt-10">
            <ToastContainer/>
            <div className='flex flex-col md:flex-row gap-8 p-5 md:p-0'>
                <div className='md:w-1/2 bg-[#1313130D] rounded-2xl p-16'>
                    <img src={book.image} alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div>
                        <p className="text-4xl font-bold text-[#131313]">{book.bookName}</p>
                        <p className="mt-5 pb-5 border-b border-[#13131326] text-[#131313CC] font-medium text-xl">By : {book.author}</p>
                        
                    </div>
                    <div className="mt-5 pb-5 border-b border-[#13131326]">
                        <p className="text-xl font-medium">{book.category}</p>
                    </div>
                    <div className="mt-5 pb-5 border-b border-[#13131326]">
                        <p className="text-[16px] font-normal text-[#131313B3]"> <span className="font-bold text-[#131313]">Review:</span> {book.review}</p>
                        <div className="flex flex-row gap-5 mt-12 items-center">
                            <p className="font-bold text-[#131313] text-[16px] ">Tag</p>

                            {
                                book.tags.map(tag => (<p className='bg-[#23BE0A0D] rounded-3xl text-[16px] text-center text-[#23BE0A] font-medium px-5 py-2' key={tag.id}>#{tag}</p>))

                            }

                        </div>
                        
                    </div>
                    <div className="mt-5 md:w-2/3 flex flex-col gap-3">
                        <div className="flex flex-row gap-10" >
                            <div className="text-[16px] font-normal text-[#131313B3] text-left">Number of Pages:</div>
                            <div className="text-[16px] font-semibold text-[#131313] text-left">{book.totalPages}</div>
                        </div>
                        <div className="flex flex-row gap-24" >
                            <div className="text-[16px] font-normal text-[#131313B3] text-left">Publisher:</div>
                            <div className="text-[16px] font-semibold text-[#131313] text-left">{book.publisher}</div>
                        </div>
                        <div className="flex flex-row gap-9" >
                            <div className="text-[16px] font-normal text-[#131313B3] text-left">Year of Publishing:</div>
                            <div className="text-[16px] font-semibold text-[#131313] text-left">{book.yearOfPublishing}</div>
                        </div>
                        <div className="flex flex-row gap-32" >
                            <div className="text-[16px] font-normal text-[#131313B3] text-left">Rating:</div>
                            <div className="text-[16px] font-semibold text-[#131313] text-left">{book.rating}</div>
                        </div>
                        <div className="flex flex-row gap-6 mt-3">
                            <button className="btn btn-primary bg-white text-[#131313] rounded-lg border border-[#1313134D] px-4 text-lg font-semibold hover:bg-slate-400 hover:border hover:border-[#1313134D]" onClick={addRead}>Read</button>
                    
                            <button className="btn btn-primary bg-[#50B1C9] text-white rounded-lg px-4 text-lg border-0 font-semibold hover:bg-blue-400" onClick={addWish}>Wish List</button>
                </div>
                    </div>

                </div>
        </div>
    
            
        </div>
    );
};

export default BookDetails;