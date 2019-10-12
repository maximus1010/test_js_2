const max = [
    { name: 'Jonny Walker', birthDate: '1995-12-17' },
    { name: 'Andrew', birthDate: '2001-10-29' }
];

const birthDate = max.sort((a, b) => a.birthDate.localeCompare(b.birthDate))[0].birthDate;
let maxAge;
if (birthDate) {
    maxAge = new Date().getFullYear() - new Date(birthDate).getFullYear();
}
console.log(maxAge);