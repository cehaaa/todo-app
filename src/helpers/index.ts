export const formatedDate = (): string => {
	const now = new Date();

	const year = now.getFullYear();
	const month = now.getMonth();
	const date = now.getDate();

	const hours = now.getHours();
	const minutes = now.getMinutes();

	return `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(
		2,
		"0"
	)} ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
