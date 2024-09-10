const today = new Date('September, 10, 2024');
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

const formattedDate = `${year}年${month}月${date}日`;

console.log(formattedDate);