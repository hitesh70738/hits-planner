var today = dayjs();
var todayDate = $('#currentDay').text(today.format("dddd - DD - MMMM - YYYY"))
console.log(todayDate)

function createTimeBlocks(){
    const dayHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
    for (var i = 0; i < dayHours.length;i++) {
        
        // const timeFrame = $('class', 'time-block').text(dayHours[i])
        // $('.container').append(timeFrame)
        const time = $('<p>').attr('class','row')
        const eventInput = $('<input class="event-input" type="text" placeholder="Add event here">');
        const saveBtn = $('<button class="btn">Save</button>')

        time.text(dayHours[i])
        $('.container').append(time)
        
        // $('.event-input').css('background-color', '#ff6961')
        time.append(eventInput)
        // $('.btn').attr('class','saveBtn')
        // saveBtn.append(eventInput)
        saveBtn.on('click', function(){
            const input = eventInput.val();
        })
        
        // if (i === 3){
        //     $('.event-input').css('background-color', '#ff6961')
        //     break;
        // } else if (i === 4 || i === 9){
        //     $('.event-input').css('background-color', '#77dd77')
        // }
    
    }

        
    

    }

createTimeBlocks()

// $(window).on('scroll', function() {
//     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
//       createTimeBlocks(); // Add more time blocks when near the bottom
//     }
//   });

