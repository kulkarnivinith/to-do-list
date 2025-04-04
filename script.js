function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as done on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Remove task on double-click
  li.addEventListener("dblclick", function () {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // Clear the input box
}
