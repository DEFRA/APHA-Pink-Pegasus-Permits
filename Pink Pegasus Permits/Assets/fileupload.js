function (element, input) {
    var fileInput = document.querySelector('input[type=file]');
    return fileInput ? fileInput.value : "";
}