let r = document.querySelector('#inputR');
let g = document.querySelector('#inputG');
let b = document.querySelector('#inputB');
const box = document.querySelector('#co');
const btn = document.querySelector('#convertButton');
const op = document.querySelector('#output');
btn.addEventListener('click', () => {
    
    if(!(Number(r.value)>=0&&Number(r.value)<=255&&Number(g.value)>=0&&Number(g.value)<=255&&Number(b.value)>=0&&Number(b.value)<=255))
    {
        window.alert("Please Enter a number between 0-255.");
    }
    else{
    // eslint-disable-next-line no-undef
    r = Number(r.value).toString(16);
    g = Number(g.value).toString(16);
    b = Number(b.value).toString(16);

  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
     
    
    op.value = "#" + r + g + b;
    box.style.backgroundColor=op.value;
   }
});
