/**
 * Capture data from swiper
 * @param {String} swipeDestinationControlID ID of TEXT or HIDDEN input control to populate with swipe data
 */
function getSwipe(swipeDestinationControlID)
{
  sdc = document.getElementById(swipeDestinationControlID);
  if (sdc)
  {
    var controlType = sdc.getAttribute('type').toLowerCase();
    if (controlType == "text" || controlType == "hidden")
    {
      sdc.value = "";
      document.addEventListener('keypress', function(event)
        {
          event.preventDefault();
          if(event.which == 13) // On ENTER submit parent form
          {
            document.removeEventListener('keypress');
            if (sdc.form)
              sdc.form.submit();
          }
          else
          {
            sdc.value += String.fromCharCode(event.which);
          }
          return false;
        });
    }
  }
}

/*
* Cancel swipe capture
*/
function cancelSwipe()
{
  if (sdc)
    sdc.value = "";
  document.removeEventListener('keypress');
}
