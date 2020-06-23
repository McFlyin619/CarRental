


function init() {
    console.log('Register Page Loaded Successfully!')

    $('#registerCar').click(register);
}

window.onload = init;




function Car(make,model,year,miles,category,color,mpg,price,image,isManual) {
    this.make = make;
    this.model = model;
    this.year = parseInt(year) || 0;
    this.miles = parseInt(miles) || 0;
    this.category = category;
    this.color = color;
    this.mpg =parseInt(mpg) || 0;
    this.price = parseFloat(price) || 0;
    this.image = image;
    this.isManual = isManual;
}


function register() {
    var make = $('#carMake').val();
    var model = $('#carModel').val();
    var year = $('#carYear').val();
    var miles = $('#carMiles').val();
    var category = $('#carCategory').val();
    var color = $('#carColor').val();
    var mpg = $('#carMPG').val();
    var price = $('#carPrice').val();
    var image = $('#carImage').val();
    var isManual = $('#radio_0').is(":checked");
    
    var newCar = new Car(make, model, year, miles, category, color, mpg, price, image, isManual);

    console.log('Car info ', newCar);

    $.ajax({
        type: 'POST',
        url: '/catalog/registerCar',
        data: JSON.stringify(newCar),
        contentType: 'application/json',
        success: (res) => {
            console.log('Server says: ', res);
        },
        error: (errorDetails) => {
            console.log("there is an error: ", errorDetails);
        }
        
    });

    
}

