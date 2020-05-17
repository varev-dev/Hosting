var vrvCountVPS = 0;
var vrvCountCloud = 0;
var vrvCountDB = 0;
var vrvItems = 0;

function vrvVPSAddIntoBasket() {
    vrvItems += 1;
    vrvCountVPS += 1;
    console.log(vrvCountVPS);

    localStorage.setItem('VPS', vrvCountVPS);
    console.log(localStorage);

    vrvCountItems();
}

function vrvCloudAddIntoBasket() {
    vrvItems += 1;
    vrvCountCloud += 1;
    console.log(vrvCountCloud);

    localStorage.setItem('Cloud', vrvCountCloud);
    console.log(localStorage);

    vrvCountItems();
}

function vrvDBAddIntoBasket() {
    vrvItems += 1;
    vrvCountDB += 1;
    console.log(vrvCountDB);

    localStorage.setItem('DB', vrvCountDB);
    console.log(localStorage);

    vrvCountItems();
}

function vrvCountItems() {
    console.log(vrvItems);
}