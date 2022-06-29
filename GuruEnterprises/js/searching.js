const searchHeading = document.getElementsByClassName('searchHeading');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const productContainer = document.getElementsByClassName('productContainer');
const headingTitle = document.getElementsByClassName('headingTitle');
const productList = document.querySelector('.productList');

let node = document.createElement('div');
let html = `<h1 style="color:purple; letter-spacing:2px; font-size:17px;"> Result Not Found !!! </h1>`;
node.insertAdjacentHTML('afterbegin', html);

// console.log(searchHeading);

searchBtn.addEventListener('click', () => {
    let searchText = search.value.toUpperCase();
    let count = 0;
    //    alert(searchText);

    for (let i = 0; i < searchHeading.length; i++) {

        let searchInText = (searchHeading[i].innerHTML).toUpperCase();
        if (searchInText.indexOf(searchText) > -1) {
            (searchHeading[i].parentElement).parentElement.style.display = "";

            count++;


        }
        else {
            (searchHeading[i].parentElement).parentElement.style.display = "none";
            for (let j = 0; j < headingTitle.length; j++) {
                headingTitle[j].style.display = "none";




            }

        }

    }

if(count === 0) {
    productList.appendChild(node);
  
}
else{
   
    productList.removeChild(node);
 
}

});


