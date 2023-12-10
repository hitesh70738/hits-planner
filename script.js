var today = dayjs();
var todayDate = $('#currentDay').text(today.format("dddd - DD - MMMM - YYYY"))
console.log(todayDate)

function createTimeBlocks(){
    const dayHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
    for (var i = 0; i < dayHours.length;i++) {
        
        // const timeFrame = $('class', 'time-block').text(dayHours[i])
        // $('.container').append(timeFrame)
        const time = $('<p>').attr('class','row')
        time.text(dayHours[i])
        $('.container').append(time)


        

    }
};
createTimeBlocks()

// $(window).on('scroll', function() {
//     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
//       createTimeBlocks(); // Add more time blocks when near the bottom
//     }
//   });

