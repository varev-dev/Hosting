var vrvCountVPS = 0; 
vrvCountVPS = parseInt(localStorage.getItem('VPS'), 10);
if(localStorage.getItem('VPS') == null){
    vrvCountVPS = 0; 
}

var vrvCountCloud = 0;
vrvCountCloud = parseInt(localStorage.getItem('Cloud'), 10);
if(localStorage.getItem('Cloud') == null){
    vrvCountCloud = 0; 
}

var vrvCountDB = 0;
vrvCountDB = parseInt(localStorage.getItem('DB'), 10);
if(localStorage.getItem('Cloud') == null){
    vrvCountDB = 0;
}

var vrvItems = 0;
vrvItems = parseInt(localStorage.getItem('Total'), 10);
if(localStorage.getItem('Total') == null){
    vrvItems = 0;
}

document.getElementById('vrvCountItems').innerHTML = vrvItems;
vrvBasketPreview();
vrvCountAmount();
vrvCountPrice();

function vrvVPSAddIntoBasket() {
    vrvCountVPS += 1;
    localStorage.setItem('VPS', vrvCountVPS);
    vrvCountVPS = parseInt(localStorage.getItem('VPS'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvBasketPreview();
    vrvCountAmount();
    vrvCountPrice();
}

function vrvCloudAddIntoBasket() {
    vrvCountCloud += 1;
    localStorage.setItem('Cloud', vrvCountCloud);
    vrvCountCloud = parseInt(localStorage.getItem('Cloud'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvBasketPreview();
    vrvCountAmount();
    vrvCountPrice();
}

function vrvDBAddIntoBasket() {
    vrvCountDB += 1;
    localStorage.setItem('DB', vrvCountDB);
    vrvCountDB = parseInt(localStorage.getItem('DB'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvBasketPreview();
    vrvCountAmount();
    vrvCountPrice();
}

function vrvTotalItems() {
    localStorage.setItem('Total', vrvCountDB + vrvCountVPS + vrvCountCloud);
    vrvItems = parseInt(localStorage.getItem('Total'), 10);
    document.getElementById('vrvCountItems').innerHTML = vrvItems;
}

function vrvBasketPreview() {
    if (localStorage.getItem('VPS') == null && localStorage.getItem('Cloud') == null && localStorage.getItem('DB') == null) {
        document.getElementById('vrvNone').style.display = "block";
    }

    if (localStorage.getItem('VPS') == null) {
        document.getElementById('vrvItemVPS').style.display = "none";
    } 
    else {
        document.getElementById('vrvItemVPS').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }

    if (localStorage.getItem('Cloud') == null) {
        document.getElementById('vrvItemCloud').style.display = "none";
    }
    else {
        document.getElementById('vrvItemCloud').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }

    if (localStorage.getItem('DB') == null) {
        document.getElementById('vrvItemDB').style.display = "none";
    }
    else {
        document.getElementById('vrvItemDB').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }
}

function vrvCountAmount() {
    document.getElementById('vrvREVPS').value = vrvCountVPS;
    document.getElementById('vrvRECloud').value = vrvCountCloud;
    document.getElementById('vrvREDB').value = vrvCountDB;
    document.getElementById('vrvREtotal').innerHTML = vrvItems;
}

function vrvCountPrice() {
    var vrvVPSprice = (vrvCountVPS * 34.99);
    var vrvCLOUDprice = (vrvCountCloud * 19.99);
    var vrvDBprice = (vrvCountDB * 49.99);
    var vrvTotalPrice = vrvVPSprice + vrvCLOUDprice + vrvDBprice;

    document.getElementById('vrvPRVPS').innerHTML = vrvVPSprice.toFixed(2) + "$";
    document.getElementById('vrvPRCloud').innerHTML = vrvCLOUDprice.toFixed(2) + "$";
    document.getElementById('vrvPRDB').innerHTML = vrvDBprice.toFixed(2) + "$";
    document.getElementById('vrvPRtotal').innerHTML = vrvTotalPrice.toFixed(2) + "$";
}