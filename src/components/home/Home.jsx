import BookList from "../bookList/BookList";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center mt-24 text-4xl font-bold mb-11">Books</h1>
            <BookList></BookList>
        </div>
    );
};

export default Home;