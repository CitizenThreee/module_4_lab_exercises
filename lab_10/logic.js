let storedData;
let selectedItems;

const inputElement = document.getElementById('search');
inputElement.addEventListener('input', function() { filter(); });


//add a card to the page with title, price, description, and image
function addCard(title, price, text, image, icon){
    const itemTemplate = document.getElementById("item-template").content.cloneNode(true);
    itemTemplate.querySelector(".item-icon").setAttribute('icon', icon);
    itemTemplate.querySelector(".item-image").src = image;
    itemTemplate.querySelector(".item-title").innerText = title;
    itemTemplate.querySelector(".item-price").innerText = "$" + price;
    itemTemplate.querySelector(".item-description").innerText = text;
    document.getElementById("item-container").appendChild(itemTemplate);
}


//filter based on category and search value
function filter(){
    let category = document.getElementById("category").value;
    let search = document.getElementById("search").value;
    selectedItems = [...storedData];
    selectedItems = selectedItems.filter(item => {
        if(category && item.category != category) { return false; }
        if(search && !item.title.toLowerCase().includes(search.toLowerCase())){ return false; }
        return true;
    })
    refreshSelection();
}


//sort items based on the sort by selected
function sort(){
    let sort = document.getElementById("sort").value;
    if(sort){
        switch(sort){
            case "least expensive":
                selectedItems.sort((item1, item2) => item1.price - item2.price);
                break;
            case "most expensive":
                selectedItems.sort((item1, item2) => item2.price - item1.price);
                break;
            case "name a-z":
                selectedItems.sort((item1, item2) => item2.title.toLowerCase() < item1.title.toLowerCase() ? 1 : -1);
                break;
            case "name z-a":
                selectedItems.sort((item1, item2) => item2.title.toLowerCase() > item1.title.toLowerCase() ? 1 : -1);
        }

        refreshSelection();
    }
    else {
        filter();
    }
}


//Refresh all cards based on the 'selectedItems' variable
function refreshSelection(){
    document.getElementById("item-container").innerHTML = "";
    selectedItems.forEach(item => {
        let itemIcon;
        switch(item.category){
            case "men's clothing":
                itemIcon = "ph:t-shirt"
                break;
            case "women's clothing":
                itemIcon = "ph:dress"
                break;
            case "electronics":
                itemIcon = "ph:monitor"
                break;
            case "jewelery":
                itemIcon = "mdi:ring"
        }
        addCard(item.title, item.price, item.description, item.image, itemIcon)
    })
}


//--------------------Only for initialization - get the products from the fakestore once, and store them in 'storedData' variable------------------------
function initData(data) {
    let sortedProducts = data;
    data.forEach(item => {
        if(sortedProducts.get(item.category) == undefined){
            sortedProducts.set(item.category, [item]);
        }
        else{
            sortedProducts.set(item.category, [...sortedProducts.get(item.category),item]);
        }
        
    })
    allItems = data;
    storedData = sortedProducts;
    selectedItems = sortedProducts;
    refreshSelection();
}

fetch('https://fakestoreapi.com/products').then((response) => response.json()).then((json) => { storedData = [...json]; selectedItems = [...json]; refreshSelection(); })