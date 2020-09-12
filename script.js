$(document).ready(function () {



    // let d = new Date();

    // let month = d.getMonth() + 1;
    // let day = d.getDate();

    // let output =
    //     (month < 10 ? '0' : '') + month + '/' +
    //     (day < 10 ? '0' : '') + day + '/' +
    //     d.getFullYear();
    let output = moment();
    $('#currentDay').text(output);


    let timeArr = ['9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM'];
    for (let i = 0; i < timeArr.length; i++) {
        let time = timeArr[i];

        let newTable = $('<table>').addClass("table");
        let hourCell = $('<td>').addClass('col-sm-4');
        hourCell.text(time);
        newTable.append(hourCell);

        let inputEl = $('<td>').addClass('col-sm-5');
        let input = $('<input type="text">');
        input.addClass('input');
        input.attr('id', time);
        inputEl.append(input);
        newTable.append(inputEl);
        let savedInput = localStorage.getItem(time);
        input.val(savedInput);

        let saveEl = $('<td>').addClass('col-sm-3');
        let saveBtn = $('<button>').addClass('save-btn');
        saveBtn.attr('date-time');
        saveBtn.text('save');
        saveEl.append(saveBtn);
        newTable.append(saveEl);

        $('.container-fluid').append(newTable);

        saveBtn.on('click', function (){
            localStorage.setItem(time, input.val());
        });

        let hourArr = [9,10,11,12,13,14,15,16,17]
        let currentHour = moment().hour();
        if (currentHour === hourArr[i]){
            newTable.addClass('bg-danger')
        }
       
    }


});
