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

    let remover = document.getElementById('remover-finalizados')
    remover.addEventListener('click', function () {
       let remove = document.getElementsByClassName('completed') 
        for (let index=0; index<=remove.length; index+=1){
            taskList.removeChild(remove[0])
        }
    })


