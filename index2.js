var arr=[8,'s',4,'e'];


function findString(arr) {
    let string = [];
    for (let index2 = 0; index2< arr.length; index2++) {
        const element = arr[index2];
        if (typeof (element) == "string") {
            string.push(element);
        }
    }
    return (string);
}

console.log(findString(arr));