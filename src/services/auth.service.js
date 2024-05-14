import axios from "axios";

export const login = (data, callback) => {
   axios.post('https://fakestoreapi.com/auth/login', data) 
   .then(res => callback(true, res.data.token))
   .catch(err => callback(false, err))
}

// export const nameOfUser = (username, callback) => {
//    axios.get('https://fakestoreapi.com/users')
//    .then(res => res.data.find(user => {
//       if(user.username === username){
//          callback = user.name.firstname
//       }
//    }))
//    .catch(err => console.log(err))  
// }