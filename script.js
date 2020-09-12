$(document).ready(function () {



    let currentDay = moment().format("dddd, MMMM Do YYYY");
    let dayDisplay = $('#currentDay');
    dayDisplay.addClass('text-warning')
    dayDisplay.text(currentDay);



    let timeArr = ['9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
    for (let i = 0; i < timeArr.length; i++) {
        let time = timeArr[i];

        let newTable = $('<table>').addClass("table rounded");
        let hourCell = $('<td>').addClass('col-sm text-white');
        hourCell.text(time);
        newTable.append(hourCell);

        let inputEl = $('<td>').addClass('col-sm');
        let input = $('<input type="text">');
        input.addClass('input');
        input.attr('id', time);
        inputEl.append(input);
        newTable.append(inputEl);
        let savedInput = localStorage.getItem(time);
        input.val(savedInput);

        let saveEl = $('<td>').addClass('col-sm');
        let saveBtn = $('<button>').addClass('btn btn-info');
        saveBtn.attr('date-time');
        saveBtn.text('save');
        saveEl.append(saveBtn);
        newTable.append(saveEl);

        $('.container-fluid').append(newTable);

        saveBtn.on('click', function () {
            localStorage.setItem(time, input.val());    
        })
        let hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
        let currentHour = moment().hour();
        if (currentHour === hourArr[i]) {
            newTable.addClass('bg-success');
        }
        else if (currentHour > hourArr[i]) {
            newTable.addClass('bg-secondary');
        }
        else if (currentHour < hourArr[i]) {
            newTable.addClass('bg-primary')
        }

    }
})
