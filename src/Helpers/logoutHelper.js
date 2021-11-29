let cookies = document.cookie.split("; ");
let token = cookies.find((cookie)=>{
    return cookie.includes("x-auth-token")
}).split("=")[1];

console.log(token);
let resources = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    body: ""
}
return fetch("http://localhost:9999/api/users/logout", resources).then(res=>{
    console.log(res.status);
    console.log(res.body);
    return res.json();
})