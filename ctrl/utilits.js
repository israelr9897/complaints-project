export function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');       // יום עם 2 ספרות
    const month = String(date.getMonth() + 1).padStart(2, '0'); // חודש (0-11)
    const year = String(date.getFullYear()).slice(-2);         // שתי ספרות אחרונות של השנה
    return `${day}/${month}/${year}`;
}