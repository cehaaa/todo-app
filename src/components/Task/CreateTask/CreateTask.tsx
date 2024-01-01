import React, { useContext, useState } from "react";

// components
import Modal from "../../Basic/Modal/Modal";
import Form from "../../Basic/Form/Form";
import Button from "../../Basic/Button/Button";
import Input from "../../Basic/Input/Input";
import Textarea from "../../Basic/Textarea/Textarea";

// props
import TaskProps from "../TaskProps";

// context
import TaskContext from "../TaskContext";

// interface
import { TaskInterface } from "../TaskInterface";

// helpers
import { formatedDate } from "../../../helpers";

const CreateTask: React.FC<TaskProps> = ({ onIsShowModalChange, isShow }) => {
	const { tasks, setTasks } = useContext(TaskContext);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setTasks([...tasks, createTaskForm]);
		onIsShowModalChange(false);
		setCreateTaskForm(initialValue);
	};

	const initialValue: TaskInterface = {
		id: 0,
		title: "",
		description: "",
		status: 0,
		createdAt: formatedDate(),
	};

	const [createTaskForm, setCreateTaskForm] =
		useState<TaskInterface>(initialValue);

	const setTaskCreateFormField = (event: any) => {
		const { name, value } = event.target;
		const id = tasks.length + 1;

		setCreateTaskForm(prevState => {
			return {
				...prevState,
				id,
				[name]: value,
			};
		});
	};

	return (
		<Modal.Base isShow={isShow}>
			<Modal.Header>
				<div className='text-xl'>New Task</div>
				<Modal.CloseButton onIsShowModalChange={onIsShowModalChange} />
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Input
						placeholder='Title'
						name='title'
						label='Title'
						value={createTaskForm.title}
						handleInputChange={setTaskCreateFormField}
					/>
					<Textarea
						placeholder='Description'
						name='description'
						label='Description'
						value={createTaskForm.description}
						handleInputChange={setTaskCreateFormField}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleSubmit}>Submit</Button>
			</Modal.Footer>
		</Modal.Base>
	);
};

export default CreateTask;
