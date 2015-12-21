/**
 * Capture data from swiper
 * @param {String} swipeDestinationControlID ID of TEXT or HIDDEN input control to populate with swipe data
 */
function getSwipe(swipeDestinationControlID)
{
  window.sdc = document.getElementById(swipeDestinationControlID);
  if (window.sdc)
  {
    var controlType = window.sdc.getAttribute('type').toLowerCase();
    if (controlType == "text" || controlType == "hidden")
    {
      window.sdc.value = "";
      document.addEventListener('keypress', swipeCapture, true);
    }
  }
}

/**
 * Event function for capturing swipe data
 */
function swipeCapture(event)
{
  event.preventDefault();
  if(event.which == 13) // On ENTER submit parent form
  {
    document.removeEventListener('keypress', swipeCapture, true);
    if (window.sdc.form)
    {
      window.sdc.form.submit();
    }
  }
  else
  {
    window.sdc.value += String.fromCharCode(event.which);
  }
  return false;
}

/*
* Cancel swipe capture
*/
function cancelSwipe()
{
  if (window.sdc)
  {
    window.sdc.value = "";
  }
  document.removeEventListener('keypress', swipeCapture, true);
}
