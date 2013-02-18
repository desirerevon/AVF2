
//ALERT DEMO-------------------------------------------------------------------------

function onBodyLoad()
{
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady()
{
    // do your thing!
    phoneGapReady.innerHTML = ("")
    
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

// Show a custom alert
//
function showAlert() {
    navigator.notification.alert(
                                 'Is this your location?', // message
                                 alertDismissed, // callback
                                 'Alert', // title
                                 'Done' // buttonName
                                 );
}

// process the confirmation dialog result
function onConfirm(button) {
    alert('Location ' + button);
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
                                   'What now?', // message
                                   onConfirm, // callback to invoke with index of button pressed
                                   'Alert', // title
                                   'Confirm Location,Confirmed' // buttonLabels
                                   );
}
