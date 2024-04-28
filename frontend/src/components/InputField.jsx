const InputField = ({ label, id, name, type = "text", onChange, value }) => {
	return (
		<div>
			<label htmlFor={id} className='block text-sm font-medium text-white'>
				{label}
			</label>
			<input
				className='mt-1 p-2 w-full border rounded-md text-white focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 bg-transparent'
				id={id}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputField;