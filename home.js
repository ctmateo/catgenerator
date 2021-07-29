const generateValue = () =>{
  let img = document.createElement('img');
  let div = document.getElementById('value');
  img.src="./images/cat.jpg"
  div.appendChild(img)
}

const remove =() =>{
  let img = document.querySelector('img');
  let div = document.getElementById('value');
  div.removeChild(img)
}



