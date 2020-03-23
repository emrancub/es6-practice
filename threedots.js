const ages = [12, 14, 16, 13, 17];
const ages2 = [15,16,12];
const ages3 = [25,36,22,29];
//const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages,...ages2,...ages3];

const business = 650;
const minister = 450;
const sochib = 350;

const takaPoisha = [450, 650, 250];

const maximum = Math.max(...takaPoisha);
console.log(maximum);