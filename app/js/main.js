var data = '';
    url = 'http://localhost:3000/db';
    text = '';

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
    xhttp.open("GET", url , true);
    xhttp.send();
};

loadData();
