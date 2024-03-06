document.addEventListener('DOMContentLoaded',function(){
    const setSize=document.querySelector('#set-size')
    const size=16;
    setSize.addEventListener('click',function(){
        const size=parseInt(prompt('Enter the size of grid: '));
        const container=document.querySelector('.container');
        container.innerHTML='';
        for(let i=0;i<size*size;i++){
            const cell=document.createElement('div');
            cell.className='grid';
            cell.id=`grid${i}`;
            container.appendChild(cell);
        }
        document.documentElement.style.setProperty('--size',size);
        const grid=document.querySelectorAll('.grid');
        grid.forEach((grid1)=>{
            grid1.addEventListener('mouseover',()=>{
                const g=`#${grid1.id}`;
                const colorer=document.querySelector(g);
                colorer.style.backgroundColor='red';
            })
        });
        reset=document.querySelector('#reset');
        reset.addEventListener('click',resetGrid);
        function resetGrid(){
            const gridContainer=document.querySelector('.container');
            gridContainer.innerHTML=''
        }
    });
});