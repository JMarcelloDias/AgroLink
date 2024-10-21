function showMenu(){
    var mobileMenu = document.getElementById('conteinerMenu');
    var header = document.querySelector('header');

    if(mobileMenu.style.display == 'flex'){
        mobileMenu.style.display = 'none';
        mobileMenu.style.boxShadow = 'none';
        header.style.boxShadow = '0px 4px 18px rgb(203, 203, 203)';
    }else{
        mobileMenu.style.display = 'flex';
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('resize', function() {
    var mobileMenu = document.getElementById('conteinerMenu'); 
    if (window.innerWidth > 450) {
        mobileMenu.style.display = 'none';
    }
});

function AbrirFiltro(valor){
    if(valor === 1 ){
        document.getElementById('filtrar').style.display = 'flex';
    }else if(valor === 0){
        document.getElementById('filtrar').style.display = 'none';
    }
}
