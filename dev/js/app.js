window.onload = () => {
    let output = document.getElementById(`output`);
    let table2 = document.getElementById(`table2`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Tell me the size of your table`, 20);
    input = parseInt(input, 10);
    console.log(typeof input);

    let myNewArray = new Array(input);
    console.log(`The size of your new array is ${myNewArray.length}`);

    content = `<table>`;// first table 

    for(let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    output.innerHTML = content;

    ///
    content = `<table>`;

    for(let i = 0; i < myNewArray.length; i++) {
        content += `<tr>`;

        for(let j = 0; j < myNewArray.length; j++) {

            let hold =(i*myNewArray.length) + 1 + j;
            if(!((myNewArray.length + ((myNewArray.length -1 )*i) === hold))) {
                hold =(myNewArray.length *myNewArray.length) -hold;
                hold++;
            }

            content += `<td>${hold}</td>`;
        }

        content += `</tr>`;
    }

    content += `</table>`;

    table2.innerHTML = content;

};