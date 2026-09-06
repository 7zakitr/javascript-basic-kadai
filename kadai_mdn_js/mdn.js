const date = new Date(2026, 8, 7);

const month = date.getMonth() +1;
const day = date.getDate();
const year = date.getFullYear();

console.log(year + '年' + month + '月' + day + '日');