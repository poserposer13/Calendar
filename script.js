$(document).ready(function () {



    let d = new Date();

    let month = d.getMonth() + 1;
    let day = d.getDate();

    let output = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day;
        $('#currentDay').text(output);


    let time;
    time = "5:00AM"
        let newRow = $('<tr>');
    let hourCell = $('<td>');
    hourCell.text(time);
    newRow.append(hourCell)



});
