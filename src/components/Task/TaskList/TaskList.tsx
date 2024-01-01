import React, { useContext, useState } from "react";

// props
import TaskProps from "../TaskProps";

// components
import Card from "../../Basic/Card/Card";
import Badge from "../../Basic/Badge/Badge";

// interface
import { TaskInterface } from "../TaskInterface";

// context
import TaskContext from "../TaskContext";

// Icon
import PencilIcon from "../../Icons/PencilIcon";
import TrashIcon from "../../Icons/TrashIcon";
import CheckIcon from "../../Icons/CheckIcon";
import Task from "../Task";

const TaskList: React.FC<TaskProps> = ({ tasks }) => {
	const [isShowModal, setIsShowModal] = useState(false);

	const initialValue = {
		id: 0,
		title: "",
		description: "",
		status: 0,
		createdAt: "",
	};
	const context = useContext(TaskContext);

	const [taskToEdit, setTaskToEdit] = useState<TaskInterface>(initialValue);

	const editList = (task: TaskInterface, index: number): void => {
		setTaskToEdit(task);

		setIsShowModal(true);
	};

	const removeList = (id: number): void => {
		context.setTasks(context.tasks.filter(task => task.id !== id));
	};

	const markDoneList = (id: number): void => {
		const temp = [...context.tasks];
		const index = temp.findIndex(task => task.id === id);
		temp[index].status = 1;
		context.setTasks(temp);
	};

	return (
		<>
			{isShowModal && (
				<Task.Edit
					isShow={isShowModal}
					onIsShowModalChange={setIsShowModal}
					task={taskToEdit!}
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
										onClick={() => editList(task, index)}
									>
										{task.title}
									</div>
									<div className='flex space-x-3'>
										{task.status === 0 && (
											<div
												className='group border hover:border-none rounded-lg flex items-center justify-center h-7 w-7 cursor-pointer hover:bg-green-500 duration-200 hover:bg-opacity-30'
												onClick={() => markDoneList(task.id!)}
											>
												<CheckIcon className='h-4 w-4 text-gray-400 group-hover:text-green-500' />
											</div>
										)}
										<div
											className='group border hover:border-none rounded-lg flex items-center justify-center h-7 w-7 cursor-pointer hover:bg-yellow-500 duration-200 hover:bg-opacity-30'
											onClick={() => editList(task, index)}
										>
											<PencilIcon className='h-4 w-4 text-gray-400 group-hover:text-yellow-500' />
										</div>
										{task.status === 0 && (
											<div
												className='group border hover:border-none rounded-lg flex items-center justify-center h-7 w-7 cursor-pointer hover:bg-red-500 duration-200 hover:bg-opacity-30'
												onClick={() => removeList(task.id!)}
											>
												<TrashIcon className='h-4 w-4 text-gray-400 group-hover:text-red-500' />
											</div>
										)}
									</div>
								</Card.Header>
								<Card.Body>
									<div>{task.description}</div>
								</Card.Body>
								<Card.Footer>
									<div className='flex justify-between'>
										<Badge status={task.status === 1 ? "success" : "warning"}>
											{task.status === 0 ? "Pending" : "Done"}
										</Badge>
									</div>
								</Card.Footer>
							</Card.Base>
						</div>
					);
				})
			) : (
				<div>no data</div>
			)}
		</>
	);
};

export default TaskList;
