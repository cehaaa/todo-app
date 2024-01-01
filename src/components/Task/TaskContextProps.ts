import { Dispatch, SetStateAction } from "react";

import { TaskInterface } from "./TaskInterface";

export type TaskContextProps = {
	tasks: TaskInterface[];
	setTasks: Dispatch<SetStateAction<TaskInterface[]>>;
};

export default TaskContextProps;
