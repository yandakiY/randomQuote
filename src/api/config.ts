import axios from 'axios';


// export default axios.create({
//     baseURL: 'http://localhost:5000/lists',
// });
export const api = axios.create({
    baseURL: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers:{
        'X-RapidAPI-Key': 'ec70e714aamshb63714fbd45cb23p1045c5jsn6302961f948a',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
});