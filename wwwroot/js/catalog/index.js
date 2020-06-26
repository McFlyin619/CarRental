
var catalog = [];

function fetchCatalog() {
    $.ajax({
        type: 'GET',
        url: '/catalog/getCatalog',
        success: (res) => {
            console.log('Catalog: ', res);
            catalog = res;
            displayCars();
        },
        error: (error) => {
            console.log('There is an error', error);
        }
    });
}

function displayCars() {
    for(let i=0; i < catalog.length; i++) {
        var car = catalog[i];

        var card = `
        <figure class="figure">
            <img onclick="displayModal(${i})" src="${car.image}" class="figure-img img-fluid rounded" alt="vehicle picture">
            <figcaption class="figure-caption">${car.year} ${car.make} ${car.model}<button class="btn btn-outline-primary btn-block" onclick="displayModal(${i})">Rent Me - $${car.price.toFixed(2)}</button></figcaption>
        </figure>
        `;
        $('#catalog-container').append(card);
    }
}

function displayModal(index) {
    var car = catalog[index];

    $('#mdlTitle').text(`${car.year} ${car.make} ${car.model}`);
    $('#mdlImg').html(`<img class="car-img" src="${car.image}">`);
    $('#mdlPrice').text(`$${car.price.toFixed(2)}`);
    $('#mdlCat').text(`${car.category}`);
    $('#mdlColor').text(`${car.color}`);
    $('#mdlMiles').text(`${car.miles}`);
    $('#mdlMpg').text(`${car.mpg}`);
    var transmissionType = car.isManual ? "Manual" : "Automatic"
    $('#mdlTrans').text(transmissionType);

    $('#popup').modal();
}


function init() {
    console.log('Catalog Page Loaded');
    fetchCatalog();
}

window.onload = init;