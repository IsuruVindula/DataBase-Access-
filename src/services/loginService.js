
import data from '../config.json';

const apiEndpoint = data.apiUrl+'/login'


export  function  login(userName,password){
    const loginCre = {userName,password};
    console.log({apiEndpoint});
    fetch(apiEndpoint, {
        method:"POST", body:JSON.stringify(loginCre)
    }).then((response)=>{
        response.json().then((result)=>{
            console.log("result",result);
        })
    })
}