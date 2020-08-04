const generate = document.getElementsByClassName('generate')[0];
const gradText = document.getElementsByClassName('gradient-text')[0];

generate.addEventListener('click', function() {
    // let r = Math.floor(Math.random() * 255);
  // let g = Math.floor(Math.random() * 255);
  // let b = Math.floor(Math.random() * 255);

  // gradText.innerHTML = gradient;

  // gradText.style.backgroundImage = `linear-gradient( ${gradient} )`;
  // `rgb(${r},${g},${b})`;

  // let dark_level = (ra + ga + ba + rb + gb + bb) / 6;

  // alert(dark_level);

  // if(dark_level < 128) {
  //   generate.style.color = '#121212';
  //   generate.style.border = '1px solid #121212';
  //   return;
  // }
  //
  // generate.style.color = '#fff';
  // generate.style.border = '2px solid #fff';

  // let gradient = `#${r1}${g1}${b1}, #${r2}${g2}${b2}`;

  // alert(gradient);
  // let gradient = `rgb(${ra}, ${ga}, ${ba}), rgb(${rb}, ${gb}, ${bb})`;

  // document.body.style.background = 'linear-gradient(rgba('+ra+','+ga+', '+ba+'), rgba('+rb+','+gb+', '+bb+'))';
  // generate.style.background = 'linear-gradient(rgba('+ra+','+ga+', '+ba+'), rgba('+rb+','+gb+', '+bb+'))';

  gradText.innerHTML = '';

  // random integer 0 - 255
  let ra = Math.floor(Math.random() * 255);
  let ga = Math.floor(Math.random() * 255);
  let ba = Math.floor(Math.random() * 255);
  let rb = Math.floor(Math.random() * 255);
  let gb = Math.floor(Math.random() * 255);
  let bb = Math.floor(Math.random() * 255);

  // convert all random string to hex color #xxxxxx
  let r1 = ra.toString(16);
  let g1 = ga.toString(16);
  let b1 = ba.toString(16);
  let r2 = rb.toString(16);
  let g2 = gb.toString(16);
  let b2 = bb.toString(16);

  let color1 = `#${r1}${g1}${b1}`;
  let color2 = `#${r2}${g2}${b2}`;
  let gradient = `${color1}, ${color2}`;

  let span1 = document.createElement('span');
  span1.setAttribute('class', 'color1');
  let valueSpan1  = document.createTextNode(color1);
  span1.appendChild(valueSpan1);

  let comma = document.createElement('span');
  let valueComma = document.createTextNode(', ');
  comma.appendChild(valueComma);

  let span2 = document.createElement('span');
  span2.setAttribute('class', 'color2');
  let valueSpan2  = document.createTextNode(color2);
  span2.appendChild(valueSpan2);

  alert(color1);
  alert(color2);

  document.body.style.background = `linear-gradient( ${gradient} )`;

  generate.style.background = `linear-gradient( ${gradient} )`;


  gradText.appendChild(span1);
  gradText.appendChild(comma);
  gradText.appendChild(span2);

  gradText.firstChild.style.backgroundColor = color1;
  gradText.lastChild.style.backgroundColor = color2;



});
