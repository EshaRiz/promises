let URL = "https://cat-fact.herokuapp.com/facts";

let petInfo = async ()=>{
   let Response = await fetch(URL);
   setTimeout(() => {
   }, 5000);
    console.log(Response);
    
    let finalData = await Response.json();
    setTimeout(() => {
    console.log(finalData[3].text)
}, 5000);
}
