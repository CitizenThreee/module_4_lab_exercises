let newsArray = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
];
let autoReload = true;

function addCard(title, text){
    const newsTemplate = document.getElementById("news-card-template").content.cloneNode(true);
    newsTemplate.querySelector(".card-title").innerText = title;
    newsTemplate.querySelector(".card-text").innerText = text;
    document.getElementById("news-container").appendChild(newsTemplate);
}

function addNewsItem() {
    let newTitle = document.getElementById('title').value;
    let newContent = document.getElementById('text').value;
    let newId = newsArray.length + 1;
    newsArray.push({id: newId, title: newTitle, content: newContent})
    document.getElementById('title').value = "";
    document.getElementById('text').value = "";
}

function loadNews() {
    document.getElementById("news-container").innerHTML = "";
    newsArray.forEach(item => {
        addCard(item.title, item.content);
    })
}

loadNews();
let interval = setInterval(() => {
    loadNews();
    console.log('interval')
}, 5000);

function toggleAutoReload(){
    if(autoReload){
        clearInterval(interval);
        autoReload = false;
        document.getElementById('toggleReload').value = "Start Reload";
    }
    else{
        autoReload = false;
        interval = setInterval(() => {
            loadNews();
            console.log('interval')
        }, 5000);

        document.getElementById('toggleReload').value = "Stop Reload";
    }
}

