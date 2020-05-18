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
vrvCountAmount();
vrvCountPrice();
vrvBasketPreview();

function vrvVPSAddIntoBasket() {
    vrvCountVPS += 1;
    localStorage.setItem('VPS', vrvCountVPS);
    vrvCountVPS = parseInt(localStorage.getItem('VPS'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvCountAmount();
    vrvCountPrice();
    vrvBasketPreview();
}

function vrvCloudAddIntoBasket() {
    vrvCountCloud += 1;
    localStorage.setItem('Cloud', vrvCountCloud);
    vrvCountCloud = parseInt(localStorage.getItem('Cloud'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvCountAmount();
    vrvCountPrice();
    vrvBasketPreview();
}

function vrvDBAddIntoBasket() {
    vrvCountDB += 1;
    localStorage.setItem('DB', vrvCountDB);
    vrvCountDB = parseInt(localStorage.getItem('DB'), 10);
    vrvTotalItems();
    console.log(localStorage);
    vrvCountAmount();
    vrvCountPrice();
    vrvBasketPreview();
}

function vrvTotalItems() {
    localStorage.setItem('Total', vrvCountDB + vrvCountVPS + vrvCountCloud);
    vrvItems = parseInt(localStorage.getItem('Total'), 10);
    document.getElementById('vrvCountItems').innerHTML = vrvItems;
}

function vrvBasketPreview() {
    if (localStorage.getItem('VPS') == 0 && localStorage.getItem('Cloud') == 0 && localStorage.getItem('DB') == 0) {
        document.getElementById('vrvNone').style.display = "block";
        document.getElementById('vrvRemoveALL').style.display = "none";
        document.getElementById('vrvPayment').style.display = "none";
        document.getElementById('vrvREtotal').style.display = "none";
        document.getElementById('vrvPRtotal').style.display = "none";
    }
    else {
        document.getElementById('vrvRemoveALL').style.display = "block";
        document.getElementById('vrvPayment').style.display = "block";
        document.getElementById('vrvREtotal').style.display = "block";
        document.getElementById('vrvPRtotal').style.display = "block";
    }

    if (localStorage.getItem('VPS') == 0 || localStorage.getItem('VPS') == null) {
        document.getElementById('vrvItemVPS').style.display = "none";
    } 
    else {
        document.getElementById('vrvItemVPS').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }

    if (localStorage.getItem('Cloud') == 0 || localStorage.getItem('Cloud') == null) {
        document.getElementById('vrvItemCloud').style.display = "none";
    }
    else {
        document.getElementById('vrvItemCloud').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }

    if (localStorage.getItem('DB') == 0 || localStorage.getItem('DB') == null) {
        document.getElementById('vrvItemDB').style.display = "none";
    }
    else {
        document.getElementById('vrvItemDB').style.display = "block";
        document.getElementById('vrvNone').style.display = "none";
    }
}

function vrvCountAmount() {
    document.getElementById('vrvREVPS').innerHTML = vrvCountVPS;
    document.getElementById('vrvRECloud').innerHTML = vrvCountCloud;
    document.getElementById('vrvREDB').innerHTML = vrvCountDB;
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

function vrvClearBasket() {
    vrvCountVPS = 0;
    vrvCountDB = 0;
    vrvCountCloud = 0;
    vrvItems = 0;

    localStorage.setItem('VPS', vrvCountVPS);
    localStorage.setItem('Cloud', vrvCountCloud);
    localStorage.setItem('DB', vrvCountDB);
    localStorage.setItem('Total', vrvItems);

    vrvCountPrice();
    vrvCountAmount();
    vrvTotalItems();
    vrvBasketPreview();
}