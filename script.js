$(document).ready(function () {



    let currentDay = moment().format("dddd, MMMM Do YYYY");
    let dayDisplay = $('#currentDay');
    dayDisplay.addClass('text-warning')
    dayDisplay.text(currentDay);



    let timeArr = ['8:00AM','9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
    for (let i = 0; i < timeArr.length; i++) {
        let time = timeArr[i];

        let newTable = $('<table>').addClass("table table-striped rounded");
        let hourCell = $('<th>').addClass('text-white');
        hourCell.attr('scope', 'row')
        hourCell.text(time);
        newTable.append(hourCell);
        
        let inputEl = $('<td>').addClass('col-sm');
        let input = $('<textarea type="text">');
        input.addClass('input');
        input.addClass('bg-light');
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

        $('.container').append(newTable);

        saveBtn.on('click', function (event) {
            event.preventDefault();
            localStorage.setItem(time, input.val());
        })
        let hourArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
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
