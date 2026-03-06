import React from 'react';

import { useEffect, useState } from 'react'
import Ticket from './Ticket';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TaskCard from './TaskCard';
import backImage1 from '../assets/vector1.png';
import backImage2 from '../assets/vector2.png';



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
		//toast.success(`Added to Pending List : ${ticket.title}`);
		toast.success(`"${ticket.title}" added to Pending List`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: "light"
		});
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
			<div className='my-5 py-10 w-11/12  mx-auto flex gap-3 flex-col md:flex-row'>

				{/* In-Progress Counter */}
				<div
					className="w-full md:w-1/2 text-center text-2xl text-white p-5 h-[250px] flex items-center justify-center flex-col rounded-xl gap-5 bg-center bg-no-repeat bg-cover transition duration-300 hover:scale-105 hover:shadow-xl"
					style={{
						backgroundImage: `url(${backImage1}), linear-gradient(135deg,#422AD5,#6A4BFF)`,
						backgroundSize: "cover, cover",
					}}
				>
					<h3>In-Progress</h3>
					<h1 className="font-bold text-5xl">{InProCounter.length}</h1>
				</div>


				<div className="w-full md:w-1/2 text-center text-2xl text-white p-5 h-[250px] flex items-center justify-center flex-col rounded-xl gap-5 bg-center bg-no-repeat bg-cover transition duration-300 hover:scale-105 hover:shadow-xl"
					style={{
						backgroundImage: `url(${backImage2}), linear-gradient(135deg,#22c55e,#0f766e)`,
						backgroundSize: "cover, cover",
					}}

				>
					<h3>Resolved</h3>
					<h1 className='font-bold text-5xl'>{ResolvedCounter.length}</h1>
				</div>




			</div>

			{/* Ticket Section */}
			<section className=' w-11/12 mx-auto flex gap-5 items-start justify-between flex-col-reverse md:flex-row'>
				
				{/* Tickets */}
			
				<div id='ticketCounter' className='w-full md:w-8/12 '>
				<h1 className='font-bold text-2xl text-left my-2'>Customer Tickets:</h1>

				<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2'>
					{
						tickets.map(ticket => <Ticket handleCardClicked={handleCardClicked} ticket={ticket}></Ticket>)
					}
				</div>
					

				</div>


				{/* Status Container */}
				<div className='w-full md:w-4/12'>
					{/* Task Status  */}

					<div id='taskStatusCounter' className=''>
						<h1 className='font-bold text-2xl text-center'>Task Status</h1>
						<div className='flex flex-col gap-3 justify-start '>
							{
								InProCounter.length > 0 ?
									(InProCounter.map((task) => <TaskCard handleCompleted={handleCompleted} key={task.id} task={task}></TaskCard>))
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
									(ResolvedCounter.map((task) => <h1 key={task.id} className='py-5 text-xl bg-[#E0E7FF] px-1 transition duration-300 hover:scale-102 hover:shadow-xl hover:cursor-pointer'>{task.title}</h1>))
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