


export const orderDate = ( date ) => {
    
    const phrase = date.toString();
    const arrayPhrase = phrase.split(' ');
    
    const day = arrayPhrase[0];
    const arrayDay = day.split('');
    arrayDay.pop();
    const newDay = arrayDay;
    const dayNumber = arrayPhrase[1];
    const month = arrayPhrase[2];
    const year = arrayPhrase[3];
    const hour = arrayPhrase[4];

    return {
        newDay, dayNumber, month, year, hour
    }
}
