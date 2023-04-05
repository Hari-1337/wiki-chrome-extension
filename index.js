const inputEle = document.getElementById("input-ele");
const btnEle = document.getElementById("btn-search");
const meaningEle = document.getElementById("meaning-field");
// console.log(inputEle,btnEle)
let inputVal="";



btnEle.addEventListener("click", async ()=>{
    inputVal = await getMeaning(inputEle.value);
    console.log(inputVal)
    if(inputVal!==""){
        meaningEle.classList.add("meaning")
    }
    // inputEle.value=''
    // console.log(inputVal)
    meaningEle.textContent = inputVal

})

async function getMeaning(word){
    let req = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let res = await req.json();
    return res[0].meanings[0].definitions[0].definition
}