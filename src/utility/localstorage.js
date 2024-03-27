

const getStoredAddBookOtpion = () =>{
    const storedAddBookOtpion = localStorage.getItem('add-read-book');
    if(storedAddBookOtpion){
        return JSON.parse(storedAddBookOtpion)
    }
    return [];
}

const saveAddBookOption = id =>{
    const storedAddBookOtpion = getStoredAddBookOtpion();
    const exists = storedAddBookOtpion.find(bookId => bookId === id);
    if(!exists){
        storedAddBookOtpion.push(id);
        localStorage.setItem('add-read-book', JSON.stringify(storedAddBookOtpion));
    }

    return !exists;
}

export {getStoredAddBookOtpion, saveAddBookOption}