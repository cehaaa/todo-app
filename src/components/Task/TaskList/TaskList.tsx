import React, { useContext, useState } from "react";

// props
import TaskProps from "../TaskProps";

// components
import Card from "../../Basic/Card/Card";
import Badge from "../../Basic/Badge/Badge";
import Task from "../Task";

// interface
import TaskInterface from "../../../interfaces/taskInterface";

// context
import TaskContext from "../TaskContext";

// Icon
import PencilIcon from "../../Icons/PencilIcon";
import TrashIcon from "../../Icons/TrashIcon";

const TaskList: React.FC<TaskProps> = ({ tasks }) => {
	const [isShow, setIsShow] = useState(false);

	const context = useContext(TaskContext);

	const initialValue = {
		id: 0,
		title: "",
		description: "",
		status: 0,
		createdAt: "",
	};
	const [taskToEdit, setTaskToEdit] = useState<{
		task: TaskInterface;
		index: number;
	}>({
		task: initialValue,
		index: 0,
	});

	const editList = (task: TaskInterface, index: number): void => {
		setTaskToEdit({
			task: task,
			index: index,
		});
		setIsShow(true);
	};

	const removeList = (id: number) => {
		context.setTasks(context.tasks.filter(task => task.id !== id));
	};

	return (
		<>
			{isShow && (
				<Task.Edit
					isShow={isShow}
					task={taskToEdit.task}
					index={taskToEdit.index}
					onIsShowModalChange={setIsShow}
				/>
			)}

			{tasks ? (
				tasks.map((task, index) => {
					return (
						<div key={task.id}>
							<Card.Base>
								<Card.Header>
									<div
										className=' text-lg hover:underline cursor-pointer'
										onClick={() => editList(task, index)}>
										{task.title}
									</div>
									<div className='flex space-x-3'>
										<div
											className='group border hover:border-none rounded-lg flex items-center justify-center h-7 w-7 cursor-pointer hover:bg-yellow-500 duration-200 hover:bg-opacity-30'
											onClick={() => editList(task, index)}>
											<PencilIcon className='h-4 w-4 text-gray-400 group-hover:text-yellow-500' />
										</div>
										{task.status === 0 && (
											<div
												className='group border hover:border-none rounded-lg flex items-center justify-center h-7 w-7 cursor-pointer hover:bg-red-500 duration-200 hover:bg-opacity-30'
												onClick={() => removeList(task.id!)}>
												<TrashIcon className='h-4 w-4 text-gray-400 group-hover:text-red-500' />
											</div>
										)}
									</div>
								</Card.Header>
								<Card.Body>
									<div>{task.description}</div>
								</Card.Body>
								<Card.Footer>
									<Badge status={task.status === 1 ? "success" : "warning"}>
										{task.status === 0 ? "Pending" : "Done"}
									</Badge>
								</Card.Footer>
							</Card.Base>
						</div>
					);
				})
			) : (
				<div> no data</div>
			)}
		</>
	);
};

export default TaskList;
