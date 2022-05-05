import React, { useState, useContext } from "react";

// components
import Modal from "../../Basic/Modal/Modal";
import Form from "../../Basic/Form/Form";
import Button from "../../Basic/Button/Button";
import Input from "../../Basic/Input/Input";
import Textarea from "../../Basic/Textarea/Textarea";
import Badge from "../../Basic/Badge/Badge";

// props
import TaskProps from "../TaskProps";

// context
import TaskContext from "../TaskContext";

// interface
import TaskInterface from "../../../interfaces/taskInterface";

const EditTask: React.FC<TaskProps> = ({
	isShow,
	task,
	onIsShowModalChange,
	index,
}) => {
	const { tasks, setTasks } = useContext(TaskContext);
	const [taskEditForm, setTaskEditForm] = useState<TaskInterface>(task!);

	const setTaskEditFormField = (event: any) => {
		const { name, value } = event.target;

		setTaskEditForm(prevState => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const temp = [...tasks];
		temp[index!] = taskEditForm!;
		setTasks(temp);

		onIsShowModalChange(false);
	};

	return (
		<>
			{isShow && (
				<Modal.Base isShow={isShow}>
					<Modal.Header>
						<div className='text-xl font-medium'>Edit Task</div>
						<Modal.CloseButton onIsShowModalChange={onIsShowModalChange} />
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={handleSubmit}>
							<Input
								placeholder='Title'
								name='title'
								label='Title'
								value={taskEditForm?.title}
								handleInputChange={setTaskEditFormField}
							/>
							<Textarea
								placeholder='Description'
								name='description'
								label='Description'
								value={taskEditForm?.description}
								handleInputChange={setTaskEditFormField}
							/>
							<div>
								<div className='flex space-x-5'>
									<div className='flex justify-between w-full items-center'>
										<div className='flex space-x-2'>
											<Badge status='primary'> {task?.createdAt} </Badge>
											<Badge
												status={task?.status === 0 ? "warning" : "success"}>
												{task?.status === 0 ? "Pending" : "Done"}
											</Badge>
										</div>
									</div>
								</div>
							</div>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleSubmit}>Submit</Button>
					</Modal.Footer>
				</Modal.Base>
			)}
		</>
	);
};

export default EditTask;
