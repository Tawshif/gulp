var data = '';
url = 'http://localhost:3000/db';
text = '';
table = document.getElementById('table-data');




// var xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.onload = function(e) {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         // response found
//         if (xhr.status === 200) {
//             // response OK
//             console.log(xhr.statusText);
//             data = JSON.parse(xhr.responseText).data;
//             setTable(data);
//             rowCount(table);
//         } else {
//             // response error e.g., 404
//             console.error(xhr.status);
//         }
//     }
// }
// xhr.onerror = function(e) {
//     console.error(xhr.statusText);
// }
// xhr.send(null);

function setTable(data) {
    for (var i = 0; i < data.length; i++) {
        text += "<tr>";
        text += "<td>" + data[i].id + "</td>";
        text += "<td>" + data[i].first_name + "</td>";
        text += "<td>" + data[i].last_name + "</td>";
        text += "<td>" + data[i].phone + "</td>";
        text += "</tr>";
    }
    table.innerHTML = text;
}

// function rowCount(table) {
//     console.log(table.getElementsByTagName("tr").length);
// }


$.ajax({
    url:"http://localhost:3000/db",
    type: 'GET',
    dataType: 'json'
})
.done(function(data) {
    setTable(data.data);
})
.fail(function(data) {
    console.log(data);
})
.always(function(data) {
    console.log("Success");
});

ajaxGetJSON(url, headers)
