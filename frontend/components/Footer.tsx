import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800">
			<div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">

				<div className="flex justify-center w-full md:w-auto">
					<a href="#" className="text-white mr-4">Home</a>
					<a href="#" className="text-white mr-4">About</a>
					<a href="#" className="text-white mr-4">Contact</a>
				</div>
				
				<div className="flex justify-center w-full md:w-auto">
					<a href="#" className="text-white mr-4">Facebook</a>
					<a href="#" className="text-white mr-4">Twitter</a>
					<a href="#" className="text-white mr-4">Instagram</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;