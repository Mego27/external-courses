export default function fillDropdown(indexColumn, selectNode, data) {
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