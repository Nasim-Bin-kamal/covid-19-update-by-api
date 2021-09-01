const infoContainer = document.getElementById('country-info');
const inputField = document.getElementById('input-field');

// load data 
const loadCountryData = () => {
    //const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;
    inputField.value = '';

    // spinner added when the data load 
    infoContainer.innerHTML = `'
    <div class="text-center">
        <div class="spinner-border text-warning " role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `;

    if (inputValue === '') {
        infoContainer.innerHTML = `
        <h3 class="text-center text-warning my-5">Please Enter a Country Name</h3>
        `;
    }

    fetch(`https://api.covid19api.com/live/country/${inputValue}`)
        .then(res => res.json())
        .then(data => displayCountryData(data[data.length - 1]));


}

// display data 
const displayCountryData = data => {
    // console.log(data);
    const infoContainer = document.getElementById('country-info');
    const { Country, Confirmed, Active, Deaths } = data;

    infoContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="row row-cols-1 d-grid w-25 mx-auto">
        <div class="col-12 mx-auto mt-5 px-3 py-3 bg-secondary
            text-white
            fs-4 border-3 rounded-3 shadow-sm">Country:
            <span> ${Country}</span></div>
        <div class="col-12 mx-auto mt-5 px-3 py-3 bg-secondary
            text-white
            fs-4 border-3 rounded-3 shadow-sm">Total Cases:
            <span> ${Confirmed}</span></div>
        <div class="col-12 mx-auto mt-5 px-3 py-3 bg-secondary
            text-white
            fs-4 border-3 rounded-3 shadow-sm">Total Death:
            <span> ${Active}</span></div>
        <div class="col-12 mx-auto mt-5 px-3 py-3 bg-secondary
            text-white
            fs-4 border-3 rounded-3 shadow-sm">Total Recover:
            <span> ${Deaths}</span></div>
    </div>
    `;
    infoContainer.appendChild(div);
}

