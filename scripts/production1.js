const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2(){
document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3(){
document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup4(){
document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup5(){
document.getElementById("popup-5").classList.toggle("active");
}
function togglePopup6(){
document.getElementById("popup-6").classList.toggle("active");
}
function togglePopup7(){
document.getElementById("popup-7").classList.toggle("active");
}
function togglePopup8(){
document.getElementById("popup-8").classList.toggle("active");
}
function togglePopup9(){
document.getElementById("popup-9").classList.toggle("active");
}
function togglePopup10(){
document.getElementById("popup-10").classList.toggle("active");
}

function togglePopup11(){
document.getElementById("popup-11").classList.toggle("active");
}
function togglePopup12(){
document.getElementById("popup-12").classList.toggle("active");
}
function togglePopup13(){
document.getElementById("popup-13").classList.toggle("active");
}
function togglePopup14(){
document.getElementById("popup-14").classList.toggle("active");
}
function togglePopup15(){
document.getElementById("popup-15").classList.toggle("active");
}
function togglePopup16(){
document.getElementById("popup-16").classList.toggle("active");
}
function togglePopup17(){
document.getElementById("popup-17").classList.toggle("active");
}
function togglePopup18(){
document.getElementById("popup-18").classList.toggle("active");
}
function togglePopup19(){
document.getElementById("popup-19").classList.toggle("active");
}
function togglePopup20(){
document.getElementById("popup-20").classList.toggle("active");
}

function togglePopup21(){
document.getElementById("popup-21").classList.toggle("active");
}
function togglePopup22(){
document.getElementById("popup-22").classList.toggle("active");
}
function togglePopup23(){
document.getElementById("popup-23").classList.toggle("active");
}
function togglePopup24(){
document.getElementById("popup-24").classList.toggle("active");
}
function togglePopup25(){
document.getElementById("popup-25").classList.toggle("active");
}
function togglePopup26(){
document.getElementById("popup-26").classList.toggle("active");
}
function togglePopup27(){
document.getElementById("popup-27").classList.toggle("active");
}
function togglePopup28(){
document.getElementById("popup-28").classList.toggle("active");
}
function togglePopup29(){
document.getElementById("popup-29").classList.toggle("active");
}
function togglePopup30(){
document.getElementById("popup-30").classList.toggle("active");
}

function togglePopup31(){
document.getElementById("popup-31").classList.toggle("active");
}
function togglePopup32(){
document.getElementById("popup-32").classList.toggle("active");
}
function togglePopup33(){
document.getElementById("popup-33").classList.toggle("active");
}
function togglePopup34(){
document.getElementById("popup-34").classList.toggle("active");
}
function togglePopup35(){
document.getElementById("popup-35").classList.toggle("active");
}
function togglePopup36(){
document.getElementById("popup-36").classList.toggle("active");
}
function togglePopup37(){
document.getElementById("popup-37").classList.toggle("active");
}
function togglePopup38(){
document.getElementById("popup-38").classList.toggle("active");
}
function togglePopup39(){
document.getElementById("popup-39").classList.toggle("active");
}
function togglePopup40(){
document.getElementById("popup-40").classList.toggle("active");
}

function togglePopup41(){
document.getElementById("popup-41").classList.toggle("active");
}
function togglePopup42(){
document.getElementById("popup-42").classList.toggle("active");
}
function togglePopup43(){
document.getElementById("popup-43").classList.toggle("active");
}
function togglePopup44(){
document.getElementById("popup-44").classList.toggle("active");
}
function togglePopup45(){
document.getElementById("popup-45").classList.toggle("active");
}
function togglePopup46(){
document.getElementById("popup-46").classList.toggle("active");
}
function togglePopup47(){
document.getElementById("popup-47").classList.toggle("active");
}
function togglePopup48(){
document.getElementById("popup-48").classList.toggle("active");
}
function togglePopup49(){
document.getElementById("popup-49").classList.toggle("active");
}
function togglePopup50(){
document.getElementById("popup-50").classList.toggle("active");
}


function togglePopup51(){
document.getElementById("popup-51").classList.toggle("active");
}
function togglePopup52(){
document.getElementById("popup-52").classList.toggle("active");
}
function togglePopup53(){
document.getElementById("popup-53").classList.toggle("active");
}
function togglePopup54(){
document.getElementById("popup-54").classList.toggle("active");
}
function togglePopup55(){
document.getElementById("popup-55").classList.toggle("active");
}
function togglePopup56(){
document.getElementById("popup-56").classList.toggle("active");
}
function togglePopup57(){
document.getElementById("popup-57").classList.toggle("active");
}
function togglePopup58(){
document.getElementById("popup-58").classList.toggle("active");
}
function togglePopup59(){
document.getElementById("popup-59").classList.toggle("active");
}
function togglePopup60(){
document.getElementById("popup-60").classList.toggle("active");
}