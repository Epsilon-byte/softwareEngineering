
var names = ["Lisa", "Arturo", "Kimia", "Kevin"]; // Creating an array of strings
var output = document.getElementById("output"); // Assuming there's an element with id="output" in your HTML

for (var name of names) {
  output.innerHTML += name + "<br>";
}
