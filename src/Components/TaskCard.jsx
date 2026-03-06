import React from 'react';

const TaskCard = ({ task, handleCompleted }) => {
	const { id, title, description, customer, priority, status, createdAt } = task;

	return (
		<div className='p-2 bg-white rounded-xl text-center md:text-left text-2xl font-bold transition duration-300 hover:scale-102 hover:shadow-xl hover:cursor-pointer'>
			<h1>{title}</h1>
			<button onClick={() => handleCompleted(task)} className='btn bg-green-700 w-full text-white text-xl mt-3'>Complete</button>

		</div>
	);
};

export default TaskCard;