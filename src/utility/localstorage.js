

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

const getStoredWishBookOtpion = () =>{
    const storedAddBookOtpion = localStorage.getItem('add-wish-book');
    if(storedAddBookOtpion){
        return JSON.parse(storedAddBookOtpion)
    }
    return [];
}

const saveWishBookOption = id =>{
    const storedAddBookOtpion = getStoredWishBookOtpion();
    const exists = storedAddBookOtpion.find(bookId => bookId === id);
    if(!exists){
        storedAddBookOtpion.push(id);
        localStorage.setItem('add-wish-book', JSON.stringify(storedAddBookOtpion));
    }

    return !exists;
}

const removeFromWishList = (id) => {

    const items = getStoredWishBookOtpion();
    const index = items.indexOf(id);
    
    if (index !== -1) {
        // Remove the ID from the array
        items.splice(index, 1);
        
        // Update the stored IDs in local storage
        localStorage.setItem('add-wish-book', JSON.stringify(items));
        
        console.log(`ID ${id} removed from local storage.`);
    } else {
        console.log(`ID ${id} not found in local storage.`);
    }
}

const checkIsInReadList = (id)=>{
    const items = getStoredAddBookOtpion();
    const index = items.indexOf(id);

    if(index === -1){
        return 1;
        
    }
    return 0;

}

const filterByProperty = (array, propertyName, thresholdValue) => {
    return array.filter(obj => obj[propertyName] > thresholdValue);
};

export {getStoredAddBookOtpion, saveAddBookOption, getStoredWishBookOtpion, saveWishBookOption, removeFromWishList, checkIsInReadList, filterByProperty}