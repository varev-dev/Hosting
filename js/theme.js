var vrvChangeTheme = document.getElementById('vrvTheme');

function vrvThemeType() {
    if (!vrvChangeTheme.className) {
        vrvChangeTheme.className = 'light';
        console.log("czyste");
    }
    else {
        vrvChangeTheme.className = '';
        console.log("ciemne");
    }
}