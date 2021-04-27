

let names = ['user', 'types', 'price', 'condition'];

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let array = [];
// the main constructer 
function Mobile(user,type) {
    this.user = user;
    this.type = type;

    this.price = random(100, 500);
    this.condition = 0;
    Mobile.allmobiles.push(this);
    array.push(this);
    setting();

}
Mobile.allmobiles = [];

console.log(array);
// local storage setting
 
function setting() {
    let strinArray = JSON.stringify(array);

    localStorage.setItem('key', strinArray);
}


// making the table

let parent = document.getElementById('parent');
let table = document.getElementById('table');

//making the header of the table
function headerTable() {
    let headerrow = document.createElement('tr');
    table.appendChild(headerrow);

    for (let i = 0; i < names.length; i++){
        let headerElemnt = document.createElement('th');
        headerrow.appendChild(headerElemnt);

        headerElemnt.textContent = names[i];
    }
}
headerTable();

// making the  main tabel (render)

Mobile.prototype.render = function () {
    let row = document.createElement('tr');
    table.appendChild(row);
// user render
    let element1 = document.createElement('td')
    row.appendChild(element1);
    element1.textContent = this.user;
// type render 

    let element2 = document.createElement('td')
    row.appendChild(element2);
    element2.textContent = this.type;
    // element2.textcontent = this.type;
    // console.log(this.type);

    // price render
    let element3 = document.createElement('td')
    row.appendChild(element3);
    element3.textContent = this.price;


    let element4 = document.createElement('td')
    row.appendChild(element4);
    if (this.price <= 200) {
        element4.textContent = "used";
    } else {
        element4.textContent = "new";
    }

}
// Mobile.prototype.render();

// FORM and event listener

let form = document.getElementById('form');
form.addEventListener('submit',submitter);

function submitter(event) {
    event.preventDefault();

    let name = event.target.user.value;
    let typeForm = event.target.options.value;

    let obj = new Mobile(name,typeForm);
    // console.log(type);
    obj.render();

}

function getting() {
    let get = localStorage.getItem('key');
    let parsed = JSON.parse(get);

    for (let i = 0; i < parsed.length; i++){
        new Mobile(parsed[i].user, parsed[i].type);
    }

}
getting();
for (let i = 0; i < Mobile.length; i++){
    // Mobile[i].render;
}


