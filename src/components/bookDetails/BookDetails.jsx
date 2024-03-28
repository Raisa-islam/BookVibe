import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveAddBookOption, saveWishBookOption } from "../../utility/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams()
    //console.log(books)
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)
    console.log(book)
    const addRead = ()=>{
        if(saveAddBookOption(idInt)){
            toast('book added!')
        }
        else{
            toast('book already added!')
        }
        
    } 

    const addWish = ()=>{
        if(saveWishBookOption(idInt)){
            toast('book added to wish list!')
        }
        else{
            toast('book already added!')
        }
        
    } 
    return (
        <div>
            <ToastContainer/>
            <div></div>
            <div>
                <h1>{book.bookName}</h1>

                <div className="flex flex-row">
                    <button className="btn btn-primary" onClick={addRead}>Read</button>
                    
                    <button className="btn btn-primary" onClick={addWish}>Wish List</button>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;