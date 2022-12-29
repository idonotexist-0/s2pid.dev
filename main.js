function toggleDarkMode() {
    var button = document.getElementById('dark-mode');
    var body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        button.innerHTML = 'Light Mode';
        document.getElementById('marker').style.backgroundColor = 'white';
        document.getElementById('marker').style.color = 'black';
    } else {
        body.classList.add('light-mode');
        button.innerHTML = 'Dark Mode';
        document.getElementById('marker').style.backgroundColor = 'black';
        document.getElementById('marker').style.color = 'white';
    }

}
var i = 0;
var txt = 'HTML (HyperText Markup Language) is a markup language used to create web pages. It consists of a series of tags that specify the structure and layout of the content on a web page. HTML is not a programming language, but rather a way of marking up text files to achieve formatting effects on the web. It is used to create the structure and layout of a web page, and to create hyperlinks to other pages on the web.';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("content-a").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}