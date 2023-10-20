
const button = document.querySelector('button');
const div = document.querySelector('.N2');
const img = document.querySelector('img')
var images = ['image/trois.jpg', 'image/deux.jpg', 'image/quatre.jpg', 'image/un.jpg', 'image/sis.jpg', 'image/whit.jpg', 'image/sink.jpg', 'image/naf.jpg', 'image/dis.jpg', 'image/set.jpg']
var x = 0;
button.addEventListener('click', next);
function next() {
  if (x < images.length) {
    var droppedImage = document.querySelector('.N2 img');
    if (droppedImage.src.split("/").pop().split(".")[0].endsWith(images[x].split("/").pop().split(".")[0])) {
      x++;
      if (x < images.length) {
        img.src = images[x];
      }
      alert('CORRECT')
    }
    else {
      alert("WRONG")
    }
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target.id)
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  index++
}
