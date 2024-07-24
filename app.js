let url="https://api.metalpriceapi.com/v1/latest?api_key=bbfdfd44e5c10f3192ee8554883c5c7c&base=USD&currencies=JPY";
const msg=document.querySelector(".msg-container");
let input=document.querySelector(".input-val input");
// let inputval=input.value;
// let fromsel=document.querySelector("#selto select");
// let tosel=document.querySelector(".to select");
// console.log(fromsel);


const selects=document.querySelectorAll(".selector-boxes select");

for(let country of selects){
    for(let currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(country.name==="from" && currcode==="USD"){
            newoption.selected="selected";
        }else if(country.name==="to" && currcode==="INR"){
            newoption.selected="selected"
        }
        country.append(newoption);
    }
    country.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countrycode=countryList[currCode];
    let image=element.parentElement.querySelector('img');
    image.src=`https://flagsapi.com/${countrycode}/flat/64.png`
}


msg.innerText=`${inputval} `;