import React from "react";
import TaskInterface from "../../interfaces/taskInterface";

export type TaskProps = {
	tasks?: Array<TaskInterface>;
	task?: TaskInterface;
	children?: React.ReactNode;
	index?: number;
	isShow?: boolean;
	onIsShowModalChange?: any;
};

export default TaskProps;
