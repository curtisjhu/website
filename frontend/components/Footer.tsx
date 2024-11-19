import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="w-full">
			<div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-between">

				<div className="flex justify-center w-full md:w-auto">
					<a href="#" className="text-white mr-4">Team</a>
					<a href="#" className="text-white mr-4">Contact</a>
				</div>

				<div className="flex justify-center w-full md:w-auto">
					<a href="#" className="text-white mr-4">Join</a>
					<a href="#" className="text-white mr-4">Instagram</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;