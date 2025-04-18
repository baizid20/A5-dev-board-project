const buttons = document.getElementsByClassName('function-btn');

for (const btn of buttons){
   
    btn.addEventListener('click',function(event){
     alert('Board updated successfully');
     btn.style.backgroundColor = '#9ba5e9';
     event.target.disabled = true;
    
    //  number change :
    const taskElem = document.getElementById('task-num')
    const taskNum = parseInt(document.getElementById('task-num').innerText)
     const checkElem = document.getElementById('checkboxNum');
     const checkNum = parseInt(document.getElementById('checkboxNum').innerText)
    
     if (taskNum > 0){
       taskElem.innerText = taskNum -1;
       checkElem.innerText = checkNum + 1;

     }
     
     
     

     // activity section 
    //  time-text:
     const d = new Date()
     const time = d.toLocaleTimeString('en-bd', { hour12: true });
     

    //  get-title: 
   
   
    const parent = btn.closest('.background-color')
        const titleElem = parent.querySelector('.tuxt')
        const title = titleElem.innerText;
     
     const titleText = 'You have completed the task '+ title + ' at ' + time;

    //  title-text:
     
    // 
    const aside_section = document.getElementById('asideSection');
    const para = document.createElement('p')
    const newside = aside_section.appendChild(para)
    newside.classList.add('p-5','background-color','mb-5','rounded-lg')
    newside.classList.add('background-color')
    newside.classList.add('mb-5')
    const fix = newside.innerText = titleText;

    })

}


// clear button :

const clear = document.getElementById('clear')

clear.addEventListener('click',function(){
   document.getElementById('asideSection').innerText = ' '
   
})
