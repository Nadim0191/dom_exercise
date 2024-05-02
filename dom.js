let aSampleString = "";

const countries = [
  {
    name: "Bangladesh",
    code: "BD",
  },
  {
    name: "India",
    code: "IN",
  },
  {
    name: "Pakisthan",
    code: "PK",
  },
  {
    name: "America",
    code: "USA",
  },
];

//   for(const country of countries){
//     // aSampleString += `<li>${country.name}</li>`;
//     let showCountry =document.getElementById("table-container")
//     showCountry.innerHTML +=`
//     <tr>
//     <td>${country.name}</td>
//     <td>${country.code}</td>
//     </tr>`}

for (const country of countries) {
  aSampleString += `
    <tr>
        <td>${country.name}</td>
        <td>${country.code}</td>
    </tr>`;
}

document.getElementById("table-container").innerHTML = aSampleString;
