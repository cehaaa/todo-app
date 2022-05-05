import { BASE_URL } from "./api";

export const getTasks = async () => {
	const res = await fetch(BASE_URL);
	return res.json();
};
