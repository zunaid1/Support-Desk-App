import React from 'react';

import { useEffect, useState } from 'react'
import Ticket from './Ticket';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TaskCard from './TaskCard';



const Body = () => {
	const [tickets, setTickets] = useState([]);
	const [InProCounter, SetInProCounter] = useState([]);
	const [ResolvedCounter, SetResolvedCounter] = useState([]);


	useEffect(() => {
		fetch('../TicketData.json')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTickets(data);
			})


	}, [])


	const handleCardClicked = (ticket) => {
		//alert(ticket.title);
		toast.success(`Added to Pending List : ${ticket.title}`);
		//toast.info("New ticket created!");
		SetInProCounter([...InProCounter, ticket]);

	}

	const handleCompleted = (task) => {
		toast.info(`DONE:: ${task.title}`);
		SetResolvedCounter([...ResolvedCounter, task]);
		console.log(task.id);

		console.log("Before Updated Task: ", InProCounter);

		const updatedTasks = InProCounter.filter(t => t.id !== task.id);
		SetInProCounter(updatedTasks);
		console.log("Updated Task", updatedTasks);


	}


	return (
		<section className='bg-slate-200'>
			{/* Banner Container */}
			<div className='my-5 py-10 w-11/12  mx-auto flex gap-3'>
				<div className='w-1/2 bg-indigo-500 text-center text-2xl text-white p-5 h-50 flex items-center justify-center flex-col rounded-xl gap-5'>
					<h3>In-Progress</h3>
					<h1 id='inProgressCounter' className='font-bold text-5xl'>{InProCounter.length}</h1>
				</div>

				<div className='w-1/2 bg-green-500 text-center text-2xl text-white p-5 h-50 flex items-center justify-center flex-col rounded-xl gap-5'>
					<h3>Resolved</h3>
					<h1 className='font-bold text-5xl'>{ResolvedCounter.length}</h1>
				</div>




			</div>

			{/* Ticket Section */}
			<section className=' w-11/12 mx-auto flex gap-5 items-start justify-between'>
				{/* Tickets */}
				<div id='ticketCounter' className='w-8/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
					{
						tickets.map(ticket => <Ticket handleCardClicked={handleCardClicked} ticket={ticket}></Ticket>)
					}

				</div>


				{/* Status Container */}
				<div className='w-4/12'>
					{/* Task Status  */}

					<div id='taskStatusCounter' className=''>
						<h1 className='font-bold text-2xl text-center'>Task Status</h1>
						<div className='flex flex-col gap-3 justify-start '>
							{
								InProCounter.length > 0 ?
									(InProCounter.map((task, index) => <TaskCard handleCompleted={handleCompleted} key={index} task={task}></TaskCard>))
									: (<h3 className='text-center'>Select a ticket to add to Task Status</h3>)
							}
						</div>


					</div>

					<hr className='border-2 text-slate-400 my-5'></hr>
					{/* Resolved Status  */}
					<div id='resolvedStatusCounter' className=''>
						<h1 className='font-bold text-2xl text-center'>Resolved Task</h1>
						<div className='flex flex-col gap-3 justify-start '>
							{
								ResolvedCounter.length > 0 ?
									(ResolvedCounter.map((task, index) => <h1 key={index} className='py-5 text-xl bg-[#E0E7FF] px-1'>{task.title}</h1>))
									: (<h3 className='text-center'>No Resoled tasks yet.</h3>)
							}
						</div>



					</div>

				</div>


			</section>



			<ToastContainer position="top-right" />

		</section>
	);
};

export default Body;