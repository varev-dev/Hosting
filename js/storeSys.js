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

function vrvVPSAddIntoBasket() {
    vrvItems += 1;
    vrvCountVPS += 1;
    localStorage.setItem('VPS', vrvCountVPS);
    vrvCountVPS = parseInt(localStorage.getItem('VPS'), 10);
    vrvTotalItems();
    console.log(localStorage);
}

function vrvCloudAddIntoBasket() {
    vrvItems += 1;
    vrvCountCloud += 1;
    localStorage.setItem('Cloud', vrvCountCloud);
    vrvCountCloud = parseInt(localStorage.getItem('Cloud'), 10);
    vrvTotalItems();
    console.log(localStorage);
}

function vrvDBAddIntoBasket() {
    vrvItems += 1;
    vrvCountDB += 1;
    localStorage.setItem('DB', vrvCountDB);
    vrvCountDB = parseInt(localStorage.getItem('DB'), 10);
    vrvTotalItems();
    console.log(localStorage);
}

function vrvTotalItems() {
    localStorage.setItem('Total', vrvItems);
    vrvItems = parseInt(localStorage.getItem('Total'), 10);
    document.getElementById('vrvCountItems').innerHTML = vrvItems;
}