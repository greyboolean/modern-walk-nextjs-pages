import { useState, useEffect } from "react";

function useSessionStorage<T>(
	key: string,
	initialState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [value, setValue] = useState(() => {
		const storedValue = sessionStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialState;
	});

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useSessionStorage;
