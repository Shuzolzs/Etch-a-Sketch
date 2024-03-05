const container=document.querySelector('#container');
for(let i=0;i<16*16;i++){
    const div=document.createElement('div');
    div.className='grid';
    container.appendChild(div);
}
const output=document.querySelectorAll('div');
console.log(output);