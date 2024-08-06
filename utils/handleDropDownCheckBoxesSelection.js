export const handleSelection = (isChecked, value, setState) => {
    setState((prev) => {
        if (isChecked) {
            return [...prev, value];
        } else {
            return prev.filter((item) => item !== value);
        }
    });
}