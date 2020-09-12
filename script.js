$(document).ready(function () {



    let d = new Date();

    let month = d.getMonth() + 1;
    let day = d.getDate();

    let output =
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + '/' +
        d.getFullYear();
    $('#currentDay').text(output);


    let time;

    time = "5:00AM"

    let newRow = $('<div>').addClass("row");
    
    let hourCell = $('<div>').addClass('col-sm-4');
    hourCell.text(time);
    newRow.append(hourCell);
    

    let inputEl = $('<div>').addClass('col-sm-5');
    let input = $('<input type="text">');
    input.addClass('input');
    input.attr('id', time);
    inputEl.append(input);
    newRow.append(inputEl);
    
    

    let saveEl = $('<div>').addClass('col-sm-3');
    let saveBtn = $('<button>').addClass('save-btn');
    saveBtn.attr('date-time');
    saveBtn.text('save');
    saveEl.append(saveBtn);
    newRow.append(saveEl);
    
    $('.container-fluid').append(newRow);





});
