let selectors = document.querySelectorAll(".selector-boxes select");
for (let select of selectors) {
  for (country in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = country;
    newoption.value = country;
    select.append(newoption);
  }
}
