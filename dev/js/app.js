window.onload = () => {

    let output = document.getElementById(`output`);
    let content = ``;
    let counter = 1;

    let input = window.prompt(`Please Enter a whole number for your Matrix`,`No Negatives, no letters please.`);
    input = parseInt(input, 10); //parseInt analyzes the input/argument, puts out an integer
    console.log(typeof input); //typeof returns a string indicating the type of the operand's value

    let myNewArray = new Array(input);
    console.log(`The size of the array is ${myNewArray.length}`); //$ is shortcut to the function document.getElementById().


    content = `<table>`; //assigns content to the table div in index.html

    for(let i = 0; i < myNewArray.length; i++) { //iterates through length and width i(row) and j(data/column)
        content += `<tr>`;  //tr is table row adds tr to content

        for(let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;//puts the numbers in the array
        }

        content += `</tr>`; //takes the value of table rows and adds it to content object
    }

    content += `</table>`; //takes the value of table, adds it to content object. this ends the table content


counter =1;

    content += `<table>`; //assigns content to the table div in index.html

    for(let i = 0; i < myNewArray.length; i++) { //iterates through length and width i(row) and j(data/column)
        content += `<tr>`;  //tr is table row adds tr to content

        for(let j = 0; j < myNewArray.length; j++) {
            content += `<td>${counter++}</td>`;//puts the numbers in the array
        }

        content += `</tr>`; //takes the value of table rows and adds it to content object
    }

    content += `</table>`; //takes the value of table, adds it to content object. this ends the table content


    output.innerHTML = content; //builds the array in html to print? building the table through the loop - this puts it in the html.
//by using +=, we are planning to print the first array (content)AND the second






    //now we need to make the correct amount of swaps
//then we need to print the swaps
//in the CSS we should highlight the diagonal from top right to bottom left



};
