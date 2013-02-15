//Load Camera
function onDevLoad(){
    document.addEventListener("deviceready", onDeviceReady, false);
}

//gets into phonegap's libraries to set source and destination
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}


function onPhotoDataSuccess(imageData) {
    // Grabs the image tag from html
    var smallImage = document.getElementById('smallImage');
    
    // unhides image
    smallImage.style.display = 'block';
    
    // Show the captured photo
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

//Runs when a picture is taken
function onPhotoURISuccess(imageURI) {
    // grabs image tag from html
	var largeImage = document.getElementById('largeImage');
    
    // Unhide image elements
    largeImage.style.display = 'block';
    
    // Show the captured photo
    largeImage.src = imageURI;
}

//takes picture
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 45 });
}

//Takes editable picture
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true });
}

//grabs photo from specific source
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 45,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}

//Errors
function onFail(message) {
    alert('Please try again: ' + message);
}