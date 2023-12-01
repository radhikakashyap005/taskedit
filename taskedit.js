const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTaskFromInput() {
      event.preventDefault();
      if (taskInput.value.trim() !== '') {
        const taskText = taskInput.value.trim();
        addTask(taskText);
        taskInput.value = '';
      }
    }

    function addTask(text) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="task">${text}</span>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(li);
    }

    function removeTask(button) {
      const li = button.parentElement;
      taskList.removeChild(li);
    }