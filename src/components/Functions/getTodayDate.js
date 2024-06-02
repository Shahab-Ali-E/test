
export default getTodayDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return today.toLocaleDateString('en-pk', options);
};

export const getTodayDay =()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    return weekday[today.getDay()];
}
