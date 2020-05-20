export default function checkAvailabilityButtons(data) {
    for(let i = 1; i < data.length; i++) {
        if(data[i-1].issues.length > 0) {
            document.querySelectorAll(".change-task")[i].disabled = false;
        }
        else {
            document.querySelectorAll(".change-task")[i].disabled = true;
        }
    }
}