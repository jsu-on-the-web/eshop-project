export const formatDate = (date) => {
    if (!date) return ''; // Dealing with null cases

    if (date.length === 4) {
        // Dealing with a year only
        const year = parseInt(date);
        return new Date(year, 0).toLocaleDateString('en-US', {
            year: 'numeric'
        });
    } else {
        // Dealing with a full date
        const [year, month, day] = date.split('-').map((datePart) => parseInt(datePart));
        return new Date(year, month - 1, day).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}

export const capitalizeFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};