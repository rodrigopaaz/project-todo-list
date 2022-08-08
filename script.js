let taskList = document.getElementById('lista-tarefas')
let apagaLista = document.getElementsByTagName('li')



    taskList.addEventListener('click',(object) => {
           for (let i=0; i<=apagaLista.length-1; i+=1){
            apagaLista[i].classList.remove('lista')}
            let capturaLista = (object.target.classList.add('lista'));

      
      });

    taskList.addEventListener('dblclick' ,(object) => {
        let capturaLista = (object.target.classList)
        if (capturaLista.contains('completed')){
            capturaLista.remove('completed')}
            else {capturaLista.add('completed')}
        })


