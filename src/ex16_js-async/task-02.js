const music = [
    {
        title: "Whatcha Say",
        artist: "Jason Derulo"
    },
    {
        title: "Never Gonna Give Up",
        artist: "Rick Astley"
    },
    {
        title: "In Your Eyes",
        artist: "The Weeknd"
    },
    {
        title: "Get Lucky",
        artist: "Daft Punk"
    },
    {
        title: "Forrest Gump",
        artist: "Frank Ocean"
    },
    {
        title: "The Rhythm of the Night",
        artist: "Corona"
    },
    {
        title: "What You Know",
        artist: "Two Door Cinema Club"
    },
    {
        title: "Livin' On a Prayer",
        artist: "Bon Jovi"
    },
    {
        title: "Encore",
        artist: "JAY-Z"
    },
    {
        title: "Pumped Up Kicks",
        artist: "Foster the People"
    },
];
let headersTable = ["Название", "Исполнитель"];
function debounce(currentFunction, delay) {
    let debounceValue;
    return function () {
        clearInterval(debounceValue);
        debounceValue = setTimeout(() => currentFunction.apply(this, arguments), delay);
    }
}
function addTable(data) {
    if (document.querySelector(".table")) {
        document.querySelector(".table").remove();
    }
    let table = document.createElement("table");
    table.classList.add("table");
    document.querySelector(".search").append(table)
    let rowHeader = document.createElement('tr');
    headersTable.forEach((item) => {
        let head = document.createElement('th');
        head.innerText = item;
        rowHeader.append(head);
    });
    table.append(rowHeader)
    data.forEach(item => {
        let row = document.createElement('tr');
        table.append(row);
        for (let key in item) {
            if (Object.keys(item).includes(key)) {
                let data = document.createElement('td');
                data.innerText = item[key];
                row.append(data);
            }
        }
    });
}
function filterTable (title, data) {
    if (title === ''){
        return data;
    }
    return data.filter((item) => {
        return item.title.toLowerCase() === title.toLowerCase() 
        || item.title.toLowerCase().includes(title.toLowerCase());
    })
}
addTable(music);
let input = document.querySelector(".search-input");
input.oninput = debounce(function () {
    addTable(filterTable(input.value, music));
}, 750);

