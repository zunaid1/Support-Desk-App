import React from 'react';

import { Headset } from "lucide-react";


const Logo = () => {
	return (
		<div className="flex items-center gap-2 cursor-pointer">

			{/* Icon */}
			<div className="bg-blue-600 text-white p-2 rounded-lg shadow-md">
				<Headset size={22} />
			</div>

			{/* Text */}
			<h1 className="text-2xl font-bold">
				<span className="text-blue-600">Support</span>{" "}
				<span className="text-gray-800">Desk</span>
			</h1>

		</div>
	);
};

export default Logo;