
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
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">
            ${car.year} ${car.make} ${car.model}
            </div>
            <div class="card-body text-primary">
                <img src="${car.image}" class="card-img" alt="Vehicle picture">
                <div class="card-footer">
                    <h5 class="card-title">
                        Per Day: $${car.price.toFixed(2)}
                    </h5>
                    <button class="btn btn-outline-primary btn-block" onclick="displayModal(${i})">Rent Me</button>
                </div>
            </div>
        </div>

        `;
        $('#catalog-container').append(card);
    }
}

function displayModal(index) {
    var car = catalog[index];

    $('#mdlTitle').text(`${car.year} ${car.make} ${car.model}`);
    $('#mdlImg').html(`<img class="car-img" src="${car.image}">`);
    $('#mdlPrice').text(`${car.price.toFixed(2)}`);
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