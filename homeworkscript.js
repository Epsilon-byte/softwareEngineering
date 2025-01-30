function change(buttonId) {
    var element = document.getElementById('myText');
    if (buttonId === 'button1') {
        element.style.color = "red";
    } else if (buttonId === 'button2') {
        element.style.color = "blue";
    }
}
