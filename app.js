let url =
  "https://api.metalpriceapi.com/v1/latest?api_key=bbfdfd44e5c10f3192ee8554883c5c7c&base=";
const msg = document.querySelector(".msg-container");
let input = document.querySelector(".input-val input");
const selects = document.querySelectorAll(".selector-boxes select");

// ACCESS COUNTRY AND ITS CODE
for (let country of selects) {
  for (let currcode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currcode;
    newoption.value = currcode;
    if (country.name === "from" && currcode === "USD") {
      newoption.selected = "selected";
    } else if (country.name === "to" && currcode === "INR") {
      newoption.selected = "selected";
    }
    country.append(newoption);
  }
  country.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// UPDATE FLAG WITH SELECTION
const updateFlag = (element) => {
  let currCode = element.value;
  let countrycode = countryList[currCode];
  let image = element.parentElement.querySelector("img");
  image.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
};

// BUTTON WORKING FUNCTION
let btn = document.querySelector("button");
let btnclick = btn.addEventListener("click", async () => {
  let inputval = input.value;
  let fromsel = document.querySelector("#selto1");
  let fromval = fromsel.value;
  let tosel = document.querySelector("#selto2");
  let toval = tosel.value;
  const url2 = `${url}${fromval}&currencies=${toval}`;

  let data = await fetch(url2);
  console.log(data);
  let jsdata = await data.json();
  console.log(jsdata.rates);
  let rate = jsdata.rates[toval] * inputval;
  msg.innerText = `${inputval} ${fromval} = ${rate} ${toval}`;
});
