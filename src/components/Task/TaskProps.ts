import React from "react";
import { TaskInterface } from "./TaskInterface";

export type TaskProps = {
	tasks?: Array<TaskInterface>;
	task?: TaskInterface;
	children?: React.ReactNode;
	isShow?: boolean;
	onIsShowModalChange?: any;
};

export default TaskProps;
