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