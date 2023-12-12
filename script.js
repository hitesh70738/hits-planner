$(document).ready(function() {

var today = dayjs();
var todayDate = $('#currentDay').text(today.format("dddd - DD - MMMM - YYYY"))
console.log(todayDate)

var currentHour = dayjs().hour()



function createTimeBlocks(){
    const dayHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    const selectBtn = $('saveBtn')


    for (var i = 0; i < dayHours.length;i++) {
        
        const textArea = $('<div class="subsection row"></div>')
        const time = $('<p class="hour col-2"></p>')
        const eventInput = $(`<textarea class="event-input description col-8 data-hour=${dayHours[i]} " type="text" placeholder="Add event here"></textarea>`)
        const saveBtn = $('<button class="btn saveBtn col-2">Save</button>')

    
        time.text(dayHours[i])
        textArea.append(time)
        textArea.append(eventInput)
        textArea.append(saveBtn)
        $('.container').append(textArea)
        
        const elements = $('.event-input').data('hour', dayHours[i]);
        const dataHourValue = parseInt(elements.data('hour'))
        
        if (dataHourValue < currentHour){
            eventInput.addClass('past')
        }else if (dataHourValue === currentHour){
            eventInput.addClass('present')
        }
        else if (dataHourValue > currentHour){ 
    
            eventInput.addClass('future')
        } else{
            console.log('error')
        }

        


    }
    selectBtn.on('click', function(event){
            event.preventDefault()
            console.log('clicked')
            const saveValue = eventInput.val();
            localStorage.setItem(elements.data('hour'), saveValue)
            console.log(event.target)
    
        })

    }

createTimeBlocks();
})
