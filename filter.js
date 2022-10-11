
function setPerimeter() {    
    //reading selected value
    console.log("setPerimeter");
    const perimeterValue = document.querySelector("[data-perimeter-radio]:checked").value;
    console.log(perimeterValue);

    //store filter value
    const myFilters = document.querySelector("[data-my-filter]");
    myFilters.dataset.perimeterFilterValue = perimeterValue;
    
    //apply filter
    applyFilter();
}
// function switchCriteria() {
//     const filter = document.querySelector("[switch-filter]");
//     filter.setAttribute ("uk-switcher-item","");
// }

function setPrice() {
    //reading selected value
    console.log("setPrice");
    const priceValue = document.querySelector("[data-price-radio]:checked").value;
    console.log(priceValue);

    //store filter value
    const myFilters = document.querySelector("[data-my-filter]");
    myFilters.dataset.priceFilterValue = priceValue;

    //apply filter
    applyFilter();

} 

function setType() {
    //reading selected value
    console.log("setType");
    const typeValue = document.querySelector("[data-type-radio]:checked").value;
    console.log(typeValue);

    //store filter value
    const myFilters = document.querySelector("[data-my-filter]");
    myFilters.dataset.typeFilterValue = typeValue;

    //apply filter
    applyFilter();

} 

function setMode() {
    //reading selected value
    console.log("setMode");
    const modeValue = document.querySelector("[data-mode-radio]:checked").value;
    console.log(modeValue);

    //store filter value
    const myFilters = document.querySelector("[data-my-filter]");
    myFilters.dataset.modeFilterValue = modeValue;

    //apply filter
    applyFilter();

} 


function applyFilter() {
    //read filter values
    const myFilters = document.querySelector("[data-my-filter]");
    const perimeterFilterValue = parseInt(myFilters.dataset.perimeterFilterValue);
    const priceFilterValue = parseInt(myFilters.dataset.priceFilterValue);
    const typeFilterValue = parseInt(myFilters.dataset.typeFilterValue);
    const modeFilterValue = parseInt(myFilters.dataset.modeFilterValue);

    //get all restaurants
    const restaurants = document.querySelectorAll("[data-restaurant]");

    //filter restaurants
    restaurants.forEach(restaurant => {
        const perimeter = parseInt(restaurant.dataset.perimeter);
        const price = parseInt(restaurant.dataset.price);
        const type = parseInt(restaurant.dataset.type);
        const mode = parseInt(restaurant.dataset.mode);
        console.log(`perimeter=${perimeter}, price=${price}, type=${type}, mode=${mode}`);

        //evaluate if restaurant should be displayed

        if ((perimeter <= perimeterFilterValue || perimeterFilterValue === 0 ) &&
            (price <= priceFilterValue || priceFilterValue === 0 ) &&
            (type === typeFilterValue || typeFilterValue === 0 ) &&
            (mode === modeFilterValue || modeFilterValue === 3 )) {
                restaurant.style.display = "";
        } else {
            restaurant.style.display = "none";
        }
    });

}
// function showAccount() {
//     document.querySelector('[modal-full]').style.visibility='visible';
// }