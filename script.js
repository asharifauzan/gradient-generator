const generate  = document.getElementsByClassName('generate')[0];
const genResult = document.getElementsByClassName('generate-result')[0];

// var for gradient color
let colors = [];

generate.addEventListener('click', function() {
  // Reset div box white bellow generate button
  genResult.innerHTML = '';

  // fill colors with 8 random integer
  // Result will be [2, 189, 34, 66, 254, 83];
  for(let i = 1; i <= 8; i++) {
    let element = Math.floor(Math.random() * 255);
    colors.push(element);
  }

  // Convert integer to Hexadecimal
  // Result will be [f, 3, d3, e8, b2, 1d];
  colors = colors.map((element)=> {
    return element.toString(16);
  });

  // Menambah string "0" jika element => ( 0 - f )
  colors = colors.map((element)=> {
    if (element.length < 2) {
      return '0'+element;
    }
      return element;
  });

  let color1    = `#${colors[0]}${colors[1]}${colors[2]}`;
  let color2    = `#${colors[3]}${colors[4]}${colors[5]}`;
  let gradient  = `${color1}, ${color2}`;

  let span1 = document.createElement('span');
  span1.setAttribute('class', 'color1');
  span1.appendChild(document.createTextNode(color1));

  let comma = document.createElement('span');
  comma.appendChild(document.createTextNode(', '));

  let span2 = document.createElement('span');
  span2.setAttribute('class', 'color2');
  span2.appendChild(document.createTextNode(color2));

  genResult.appendChild(span1);
  genResult.appendChild(comma);
  genResult.appendChild(span2);

  genResult.firstChild.style.backgroundColor = color1;
  genResult.lastChild.style.backgroundColor = color2;

  document.body.style.background  = `linear-gradient( ${gradient} )`;
  generate.style.background       = `linear-gradient( ${gradient} )`;

  colors = [];
});
