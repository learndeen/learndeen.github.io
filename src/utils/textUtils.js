export const getNumberEmoji = (num) => {
    if (num === 10) return '🔟';

    // Convert number to string, then valid digit string for keycap
    const keycap = '\uFE0F\u20E3';
    return num.toString().split('').map(d => d + keycap).join('');
};
