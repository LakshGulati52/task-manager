import { useState, useEffect } from "react";

const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem("tasks")) || []
);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);