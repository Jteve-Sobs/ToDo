async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    if (task.done == true) {
      li.textContent += "✅ ";
    }
    li.textContent += task.title;
    const button = document.createElement("button")
    button.textContent = "Erledigt"
    button.classList.add("item")
    button.addEventListener("click", function() {
       markTaskAsComplete(task.id);
       loadTasks();
      } );
    li.appendChild(button);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");

  await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: input.value
    })
  });

  input.value = "";
  loadTasks();
}

async function markTaskAsComplete(id) {
  console.log("ID")
  console.log(id)
  await fetch("/api/tasks/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
  });
}

loadTasks();
markTaskAsComplete(1);
