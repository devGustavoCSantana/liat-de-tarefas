function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    const taskList = document.getElementById('taskList');
    
    // Cria o item da tarefa
    const li = document.createElement('li');
    
    // Cria o checkbox para marcar a tarefa como concluída
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });
    
    // Cria o botão de remover
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    
    // Adiciona o texto e os botões ao item da lista
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(' ' + taskText));
    li.appendChild(removeButton);
    
    // Adiciona o item da lista à lista
    taskList.appendChild(li);
    
    // Limpa o campo de entrada
    input.value = '';
}
