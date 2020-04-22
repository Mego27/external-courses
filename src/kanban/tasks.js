const dataMock = [
    {
        title: 'Backlog',
        issues: [],
    },
    {
        title: 'Ready',
        issues: [],
    },
    {
        title: 'In progress',
        issues: [],
    },
    {
        title: 'Finished',
        issues: [],
    },
]
let data = dataMock;
window.onload = () => {
    loadLocalStorageData();
    checkAvailabilityButtons();
}

function getLastIdIssue() {
    let max = -Infinity;
    for(let columnTasks of data) {
        for(let issue of columnTasks.issues) {
            if(+(issue.id.slice(4)) > max) {
                max = issue.id.slice(4);
            }
        }
    }
    if(max === -Infinity) {
        max = -1;
    }
    return max;
}
function addNewTask(indexColumn, taskName, taskId) {
    let newIssue;
    if(arguments.length === 2) {
        newIssue = {
            id: "task" + (+getLastIdIssue() + 1),
            name: taskName
        };
    }
    else {
        newIssue = {
            id: taskId,
            name: taskName
        };
    }
    data[indexColumn].issues.push(newIssue);
    console.log(data);
    return newIssue.id;
}
function createTaskBlock(taskId, taskName, indexColumn) {
    let task = document.createElement("div");
    document.querySelectorAll(".tasks")[indexColumn].append(task);
    task.classList.add("task");
    task.setAttribute("id", taskId)
    task.innerHTML = taskName;
}
function createInputBacklog() {
    let input = document.createElement("input");
    document.querySelectorAll(".tasks")[0].append(input);
    input.placeholder = "Enter title of task";
    input.classList.add("task", "edit-task");
    input.focus();
    input.addEventListener("focusout", saveNewTask);
}
document.querySelectorAll(".change-task")[0].addEventListener("click", createInputBacklog);
function saveNewTask() {
    let input = document.getElementsByClassName("edit-task");
    if (input[0].value.trim() !== "") {
        let taskId = addNewTask(0, input[0].value);
        createTaskBlock(taskId, input[0].value, 0);
    }
    else {
        let taskId = addNewTask(0, "My task ");
        createTaskBlock(taskId, "My task ", 0);
    }
    updateLocalStorage();
    checkAvailabilityButtons();
    if(document.querySelector("#select-task")){
        document.querySelector("#select-task").options.length = 0;
        fillDropdown(1, document.querySelector("#select-task"));
    }
    document.getElementsByClassName("task edit-task")[0].parentNode.removeChild(document.getElementsByClassName("task edit-task")[0]);
}
let buttonsAddCard = document.querySelectorAll(".change-task");
for (let i = 1; i < buttonsAddCard.length; i++) {
    buttonsAddCard[i].addEventListener("click", createDropdown.bind(null, i));
}
function createDropdown(indexColumn) {
    if(!document.querySelector("#select-task")) {
        let select = document.createElement("select");
        document.querySelectorAll(".tasks")[indexColumn].append(select);
        select.classList.add("task", "edit-task");
        select.setAttribute("id", "select-task");
        select.style.cursor = "pointer";
        fillDropdown(indexColumn, select);
        document.querySelector("#select-task").addEventListener("change", saveChangedTask.bind(null, indexColumn));
        document.querySelectorAll(".tasks")[indexColumn].scrollTop = document.querySelectorAll(".tasks")[indexColumn].scrollHeight;
    }
    else {
        let countIterations = 0;
        let animationFocus = setInterval(() => {
        document.querySelector("#select-task").style.backgroundColor = "rgb(255, 186, 108)";
        document.querySelector("#select-task").style.transition = ".2s ease";
        setTimeout( () => {document.querySelector("#select-task").style.backgroundColor = "rgb(255, 255, 255)"}, 200);
        countIterations++;
        if(countIterations === 3) {clearInterval(animationFocus);}
        }, 400);
    }
}
function fillDropdown(indexColumn, selectNode) {
    let option = new Option("<Select task>", -1);
    option.disabled = true;
    option.selected = true;
    selectNode.append(option);
    for(let i = 0; i < data[indexColumn-1].issues.length; i++) {
        option = new Option(data[indexColumn-1].issues[i].name, data[indexColumn-1].issues[i].id);
        selectNode.append(option);
    }
    option = new Option("<Cancel>", -1);
    option.style.fontStyle = "italic";
    selectNode.append(option);
}
function saveChangedTask(indexColumn) {
    let selectedIndex = document.querySelector("#select-task").selectedIndex;
    if(document.querySelector("#select-task").options[selectedIndex].value !== "-1") {
        addNewTask(indexColumn, document.querySelector("#select-task").options[selectedIndex].textContent, document.querySelector("#select-task").options[selectedIndex].value);
        createTaskBlock(document.querySelector("#select-task").options[selectedIndex].value, document.querySelector("#select-task").options[selectedIndex].textContent, indexColumn);
        document.querySelector("#"+document.querySelector("#select-task").options[selectedIndex].value).parentNode.removeChild(document.querySelector("#"+document.querySelector("#select-task").options[selectedIndex].value));
        for (let i = 0; i < data[indexColumn-1].issues.length; i++) {
            if(data[indexColumn-1].issues[i].id === document.querySelector("#select-task").options[selectedIndex].value) {
                data[indexColumn-1].issues.splice(i, 1);
            }
        }
        updateLocalStorage();
        checkAvailabilityButtons();
    }
    document.querySelector("#select-task").parentNode.removeChild(document.querySelector("#select-task"));
}
function checkAvailabilityButtons() {
    for(let i = 1; i < data.length; i++) {
        if(data[i-1].issues.length > 0) {
            document.querySelectorAll(".change-task")[i].disabled = false;
        }
        else {
            document.querySelectorAll(".change-task")[i].disabled = true;
        }
    }
}
function updateLocalStorage() {
    localStorage.clear();
    let localStorageData = JSON.stringify(data);
    localStorage.setItem("currentData", localStorageData);
}
function loadLocalStorageData() {
    if (localStorage.getItem("currentData")) {
        data = JSON.parse(localStorage.getItem("currentData"));
    }
    for(let columnTasks = 0; columnTasks < data.length; columnTasks++) {
        document.querySelectorAll(".title-column-text")[columnTasks].textContent = data[columnTasks].title;
        for(let issue of data[columnTasks].issues) {
            createTaskBlock(issue.id, issue.name, columnTasks);
        }
    }
}