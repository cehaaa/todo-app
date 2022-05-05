import React, { useState } from "react";

// pages
import Home from "../pages/Home";

// interface
import TaskInterface from "../interfaces/taskInterface";

// props
import TaskContextProps from "./Task/TaskContextProps";

// context
import TaskContext from "./Task/TaskContext";

const App = () => {
	const [tasks, setTasks] = useState<TaskInterface[]>([]);

	const taskContextValue: TaskContextProps = {
		tasks: tasks,
		setTasks: setTasks,
	};

	return (
		<>
			<TaskContext.Provider value={taskContextValue}>
				<Home />
			</TaskContext.Provider>
		</>
	);
};

export default App;
