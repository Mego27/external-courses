export default function getLastIdIssue(data) {
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