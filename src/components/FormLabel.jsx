function FormLabel({ name, required }) {
	return (
		<div className="flex">
			<label className="text-xs font-ggBold text-discord-text-200 pb-1.5">
				{name}
			</label>
			{required && <span className="text-discord-red pl-1">*</span>}
		</div>
	);
}

export default FormLabel;
