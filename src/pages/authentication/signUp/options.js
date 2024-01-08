const options = {
	month: [
		{ value: 1, label: "January" },
		{ value: 2, label: "February" },
		{ value: 3, label: "March" },
		{ value: 4, label: "April" },
		{ value: 5, label: "May" },
		{ value: 6, label: "June" },
		{ value: 7, label: "July" },
		{ value: 8, label: "August" },
		{ value: 9, label: "September" },
		{ value: 10, label: "October" },
		{ value: 11, label: "November" },
		{ value: 12, label: "December" },
	],
	day: (selectedMonth) =>
		Array.from(
			{
				length: new Date(
					new Date().getFullYear(),
					selectedMonth,
					0
				).getDate(),
			},
			(_, i) => ({ value: i + 1, label: `${i + 1}` })
		),

	year: () => {
		const yearOptions = [];
		const current = new Date().getFullYear();

		// Minimum age to sign up is 13 years old.
		const minAgeYear = current - 13;
		for (let y = current; y >= current - 110; y--) {
			const isDisabled = y > minAgeYear;
			yearOptions.push({ value: y, label: `${y}`, isDisabled });
		}
		return yearOptions.reverse();
	},
};

export default options;
