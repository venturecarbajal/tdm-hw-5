$(document).ready(function () {
  // runs html & css first

  //Displaying current date/time
  var currentDate =
    moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
  var currentHour = moment().format('h:mm:ss a');

  var interval = setInterval(function () {
    var momentNow = moment();
    $('#currentDay').html(
      momentNow.format('YYYY MMMM DD') +
        ' ' +
        momentNow.format('dddd').substring(0, 3).toUpperCase()
    );
    $('#currentDay').html(currentDate + ' ' + momentNow.format('hh:mm:ss A'));
  }, 100);
  //Assign saveBtn click listener for user input and time stamp
  $('.saveBtn').on('click', function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    //set items in local storage.
    localStorage.setItem(time, text);
  });
  //load any saved data from LocalStorage - do this for each hour created.
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));

  function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('hour')[1]);
      console.log(blockHour, currentHour);

      //Verifies past, present, and future times
      if (blockHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('future');
        $(this).removeClass('present');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    });
  }
  hourTracker();
});
