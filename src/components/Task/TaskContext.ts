import React from "react";
import TaskContextProps from "./TaskContextProps";

export const TaskContext = React.createContext<TaskContextProps>({
	tasks: [],
	setTasks: () => {},
});

export default TaskContext;
