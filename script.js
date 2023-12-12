var today = dayjs();
var todayDate = $('#currentDay').text(today.format("dddd - DD - MMMM - YYYY"))
console.log(todayDate)

var currentHour = dayjs().hour()



function createTimeBlocks(){
    const dayHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    // console.log('current hour = ' + currentHour)
    // console.log('current hour = ' + dayHours[0])
    // console.log('<', dayHours[8] < currentHour)
    // console.log('>', dayHours[8] > currentHour)
    // console.log('===', dayHours[8] === currentHour)


    for (var i = 0; i < dayHours.length;i++) {
        
        // const timeFrame = $('class', 'time-block').text(dayHours[i])
        // $('.container').append(timeFrame)
        const textArea = $('<div class="subsection row"></div>')
        const time = $('<p class="hour col-2"></p>')
        const eventInput = $(`<textarea class="event-input description col-8 data-hour=${dayHours[i]} " type="text" placeholder="Add event here"></textarea>`)
        const saveBtn = $('<button class="btn saveBtn col-2">Save</button>')

    
        time.text(dayHours[i])
        textArea.append(time)
        textArea.append(eventInput)
        textArea.append(saveBtn)
        $('.container').append(textArea)
        
        // $('.event-input').css('background-color', '#ff6961')
        // time.append(eventInput)
        // $('.btn').attr('class','saveBtn')
        // saveBtn.append(eventInput)
        // saveBtn.on('click', function(){
        //     const input = eventInput.val();
        // }) `$( "body" ).data( "foo", 52 );`

        const elements = $('.event-input').data('hour', dayHours[i]);
        const dataHourValue = parseInt(elements.data('hour'))
        
        if (dataHourValue < currentHour){
            // console.log(i, '<', dayHours[i] < currentHour)

            eventInput.addClass('past')
        }else if (dataHourValue === currentHour){
            eventInput.addClass('present')
        }
        else if (dataHourValue > currentHour){ 
            // console.log(i, 'else', dayHours[i] > currentHour)
            eventInput.addClass('future')
        } else{
            console.log('error')
        }

        saveBtn.on('click', function(event){
            event.preventdefault()
            const saveValue = eventInput.val();
            localStorage.setItem('dayHours[i]', 'saveValue')
            console.log(saveValue)
    
        })


    }

    }

createTimeBlocks()

// $(window).on('scroll', function() {
//     if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
//       createTimeBlocks(); // Add more time blocks when near the bottom
//     }
//   });

