import React, { useState, useContext, useEffect } from "react";

// components
import Task from "../components/Task/Task";
import Modal from "../components/Basic/Modal/Modal";
import Button from "../components/Basic/Button/Button";
import Header from "../components/Basic/Header/Header";
import Spinner from "../components/Basic/Spinner/Spinner";
import Form from "../components/Basic/Form/Form";
import Input from "../components/Basic/Input/Input";
import Textarea from "../components/Basic/Textarea/Textarea";

// context
import TaskContext from "../components/Task/TaskContext";

// interface
import TaskInterface from "../interfaces/taskInterface";

// service
import { getTasks } from "../services/tasks";

// helpers
import { formatedDate } from "../helpers";

const Home = () => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { tasks, setTasks } = useContext(TaskContext);

	const initialValue: TaskInterface = {
		id: 0,
		title: "",
		description: "",
		status: 0,
		createdAt: formatedDate(),
	};
	const [taskForm, setTaskForm] = useState<TaskInterface>(initialValue);
	const setTaskFormField = (event: any) => {
		const { name, value } = event.target;

		setTaskForm(prevState => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	const fetchTasks = async () => {
		try {
			setIsLoading(true);
			const res: Array<TaskInterface> = await getTasks();
			setTasks(res);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setTasks([...tasks, taskForm]);
		setIsShowModal(false);
		setTaskForm(initialValue);
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<>
			{/* new task modal */}
			<Modal.Base isShow={isShowModal}>
				<Modal.Header>
					<div className='text-xl'>New Task</div>
					<Modal.CloseButton onIsShowModalChange={setIsShowModal} />
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Input
							placeholder='Title'
							name='title'
							label='Title'
							value={taskForm.title}
							handleInputChange={setTaskFormField}
						/>
						<Textarea
							placeholder='Description'
							name='description'
							label='Description'
							value={taskForm.description}
							handleInputChange={setTaskFormField}
						/>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleSubmit}>Submit</Button>
				</Modal.Footer>
			</Modal.Base>

			<div className=' bg-gray-100 w-screen h-screen'>
				<div className='w-9/12 mx-auto py-10'>
					<Header onIsShowModalChange={setIsShowModal} />

					<div className='w-full flex justify-center mt-5'>
						{isLoading && <Spinner />}
					</div>

					<div className='mt-7 grid grid-cols-2 gap-x-5'>
						<div className='flex flex-col gap-y-3'>
							<Task.List tasks={tasks.filter(task => task.status === 0)} />
						</div>
						<div className='flex flex-col gap-y-2'>
							<Task.List tasks={tasks.filter(task => task.status === 1)} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
