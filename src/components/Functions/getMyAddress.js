import axios from 'axios';

export default getMyAddress = async(latitude , longitude)=>{
    try {
        const location = await axios.get('https://nominatim.openstreetmap.org/reverse',{
            params:{
                format:'json',
                lat:latitude,
                lon:longitude, 
            },
            headers: {
                'Accept-Language': 'en'
            }
        })
        return location;
    } catch (err) {
        alert(err);
    }
}