import React from 'react';

const Ticket = ({ ticket, handleCardClicked }) => {


	const { id, title, description, customer, priority, status, createdAt } = ticket;

	return (
		<div onClick={() => handleCardClicked(ticket)} className=' bg-white p-5 shadow-2xl rounded-xl py-3 transition duration-300 hover:scale-102 hover:shadow-xl hover:cursor-pointer'>
			<h1 className='relative text-xl font-bold mb-4'>{title}
				<span className={`px-2 text-[16px] absolute right-0 rounded-xl p-1  font-normal  ${status === 'Open' ? 'bg-green-300' : 'bg-orange-300'}`}>
					{status}
				</span></h1>

			<p>{description}</p>

			<div className='flex justify-between items-center'>
				<span>{id}</span>
				<span className='text-red-500'>{priority}</span>
				<span>{customer}</span>
				<span>
					{new Date(createdAt).toLocaleDateString('en-GB').replace(/\//g, '-')}
				</span>
			</div>


		</div>
	);
};

export default Ticket;