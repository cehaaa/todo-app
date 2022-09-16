import { useState, useContext, useEffect } from "react";

// components
import Task from "../components/Task/Task";
import Header from "../components/Basic/Header/Header";
import Spinner from "../components/Basic/Spinner/Spinner";
import CreateTask from "../components/Task/CreateTask/CreateTask";

// context
import TaskContext from "../components/Task/TaskContext";

// interface
import TaskInterface from "../interfaces/TaskInterface";

// service
import { getTasks } from "../services/tasks";

const Home = () => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { tasks, setTasks } = useContext(TaskContext);

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

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<>
			{/* new task modal */}
			<CreateTask isShow={isShowModal} onIsShowModalChange={setIsShowModal} />

			<div className=' bg-gray-100 w-screen'>
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
