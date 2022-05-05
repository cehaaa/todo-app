import React, { useCallback } from "react";

import HeaderProps from "./HeaderProps";

import Button from "../Button/Button";

const Header = ({ onIsShowModalChange }: HeaderProps) => {
	const newTask = useCallback(() => {
		onIsShowModalChange(true);
	}, [onIsShowModalChange]);

	return (
		<div className='flex justify-between items-center'>
			<div>
				<div className=' text-2xl font-medium'>Welcome back, Stan</div>
				<div className=' text-gray-400 mt-2'>
					You've got 7 task comming up in next days.
				</div>
			</div>
			<div>
				<Button onClick={newTask}>New Task</Button>
			</div>
		</div>
	);
};

export default Header;
