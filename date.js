
exports.getDate = () => {

const today = new Date();
   
    const options = {

        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString("he-IL", options);

}


exports.getDay = () => {

    const today = new Date();
       
        const options = {
    
            weekday: 'long'
        
        };
    
        return day = today.toLocaleDateString("he-IL", options);

    }

