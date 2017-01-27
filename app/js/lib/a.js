// var data = [{
//     "id": 1,
//     "index": 0,
//     "age": 25,
//     "first_name": "Chandra",
//     "last_name": "Mathews",
//     "phone": "+1 (912) 526-3034"
// }, {
//     "id": 2,
//     "index": 1,
//     "age": 28,
//     "first_name": "Josie",
//     "last_name": "Pruitt",
//     "phone": "+1 (939) 570-3374"
// }, {
//     "id": 3,
//     "index": 2,
//     "age": 22,
//     "first_name": "Ernestine",
//     "last_name": "Skinner",
//     "phone": "+1 (940) 575-3246"
// }, {
//     "id": 4,
//     "index": 3,
//     "age": 38,
//     "first_name": "Avila",
//     "last_name": "Stephenson",
//     "phone": "+1 (992) 481-3098"
// }]


var data = '';
var text = '';
var table = document.getElementById('table-data');

function loadData() {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            data = JSON.parse(this.responseText).data;
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                text += "<tr>";
                text += "<td>" + data[i].id + "</td>";
                text += "<td>" + data[i].first_name + "</td>";
                text += "<td>" + data[i].last_name + "</td>";
                text += "<td>" + data[i].phone + "</td>";
                text += "</tr>";
            }
            table.innerHTML = text;
        }else{
            console.log()
        }
    }
    xhttp.open("GET", "http://localhost:3000/db", true);
    xhttp.send();    
};

loadData();




// for (var i = 0; i < data.length; i++) {
//     text += "<tr>";
//     text += "<td>" + data[i].id + "</td>";
//     text += "<td>" + data[i].first_name + "</td>";
//     text += "<td>" + data[i].last_name + "</td>";
//     text += "<td>" + data[i].phone + "</td>";
//     text += "</tr>";
// }

// table.innerHTML = text;
