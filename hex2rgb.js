let r = document.querySelector('#inputR');
let g = document.querySelector('#inputG');
let b = document.querySelector('#inputB');
const box = document.querySelector('#co');
const btn = document.querySelector('#convertButton');
const op = document.querySelector('#output');
function valid(x)
{
    if(x.length!=7)
    return false;
    if(x[0]==='#')
    {
        for(var i=1;i<7;i++)
        {
            if((x[i]>='0'&&x[i]<='9')||(x[i]>='a'&&x[i]<='f')||(x[i]>='A'&&x[i]<='F'))
            continue;
            else
            return false;
        }
        return true;

    }
    return false;
}

btn.addEventListener('click', () => {
    
    if(!(valid(op.value)))
    {
        window.alert("Please Enter a valid hex string");
    }
    else{
    // eslint-disable-next-line no-undef
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(op.value);

  
   r.value = "Red Component: " + parseInt(result[1], 16);
   g.value = "Green Component: " + parseInt(result[2], 16);
   b.value= "Blue Component: " + parseInt(result[3], 16);
    box.style.backgroundColor=op.value;
   }
});
