// Importing the UUID v4 function for generating unique identifiers
import {v4 as uuidV4} from 'uuid';

// Defining a type for the Task object
type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
};

// Selecting HTML elements and initializing tasks array with saved tasks
const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");
const tasks: Task[] = loadTasks();

// Adding each saved task to the list on page load
tasks.forEach(addListItem);

// Adding a submit event listener to the form
form?.addEventListener("submit", (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Checking if the input value is empty or null, if so, do nothing
    if (!input?.value) return;

    // Creating a new task object with a unique ID, title, and default values
    const newTask: Task = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };

    // Adding the new task to the tasks array and the list on the page
    tasks.push(newTask);
    addListItem(newTask);

    // Clearing the input field after adding a new task
    input.value = "";
});

// Function to add a new task item to the list on the page
function addListItem(task: Task) {
    // Creating HTML elements for the task item, label, and checkbox
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");

    // Adding a change event listener to the checkbox
    checkbox.addEventListener("change", () => {
        // Updating the completed status of the task based on checkbox state
        task.completed = checkbox.checked;
        // Logging the updated tasks array and saving it to localStorage
        console.log(tasks);
        saveTasks();
    });

    // Configuring checkbox properties and appending it to the label with task title
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);

    // Appending the label to the task item and the task item to the list on the page
    item.append(label);
    list?.append(item);

    // Logging the id, title, completed state, and date of the added task
    console.log(`Task ID: ${task.id}\nTask Title: ${task.title}\nTask Completed: ${task.completed}\nTask Date: ${task.createdAt}\n`);
}

// Function to save the tasks array to localStorage
function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
}

// Function to load tasks from localStorage or return an empty array if none exist
function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS");
    return taskJSON ? JSON.parse(taskJSON) : [];
}