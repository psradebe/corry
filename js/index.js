let confirmed = "loading...";
let deaths = "loading...";
let recovered = "loading...";
let critical = "loading...";
let active = "loading...";
let updatef = "loading...";

let numberOfConfirmed = document.getElementById("confirmed");
let numberOfDeaths = document.getElementById("deaths");
let numberOfRecovered = document.getElementById("recovered");
let numberOfCritical = document.getElementById("critical");
let numberOfActive = document.getElementById('active');
let updatedOn = document.getElementById('updated')

numberOfConfirmed.innerHTML = `${confirmed}`;
numberOfRecovered.innerHTML = `${recovered}`;
numberOfDeaths.innerHTML = `${deaths}`;
numberOfCritical.innerHTML = `${critical}`;
numberOfActive.innerHTML = `${active}`;

const getCovidSA = async country => {
    try {
        // const fetchCovid19SA = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
        const fetchCovid19SA = await fetch(`https://corona.lmao.ninja/countries/${country}`);
        const data = await fetchCovid19SA.json();
        numberOfConfirmed.innerHTML = `${data.cases}`;
        numberOfCritical.innerHTML = `${data.critical}`;
        numberOfRecovered.innerHTML = `${data.recovered}`;
        numberOfDeaths.innerHTML = `${data.deaths}`;
        numberOfActive.innerHTML =`${data.active}`;
        return data;
    } catch(err) {
        console.log(err);
    }
}

//Get the time when the API was last updated
const getAll = async () => {
    try {
        const fetchCovidAll = await fetch("https://corona.lmao.ninja/all");
        const data = await fetchCovidAll.json();
        time = moment(data.updated).format("DD-MM-YYYY h:mm:ss");
        updatedOn.innerHTML = `Last Updated: ${time}`;
    } catch(err) {
        console.log(err);
    }
}
getCovidSA("South Africa");
getAll();
