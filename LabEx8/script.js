const DateTime = luxon.DateTime;
const output = document.getElementById("output");


const birthdate = DateTime.fromISO("2005-07-22");
const now = DateTime.now();


const daysDiff = now.diff(birthdate, 'days').toObject();
output.innerHTML += `<p>1) Days since birthdate: ${Math.floor(daysDiff.days)} days</p>`;


const ymd = now.diff(birthdate, ['years', 'months', 'days']).toObject();
output.innerHTML += `<p>2) Age: ${Math.floor(ymd.years)} years, ${Math.floor(ymd.months)} months, and ${Math.floor(ymd.days)} days</p>`;


const dateA = DateTime.fromISO("2025-01-15");
const dateB = DateTime.fromISO("2025-06-10");

const diffA = Math.abs(now.diff(dateA, 'days').days);
const diffB = Math.abs(now.diff(dateB, 'days').days);
const closest = diffA < diffB ? dateA : dateB;

output.innerHTML += `<p>3) Closest date to today: ${closest.toFormat('MMMM dd, yyyy')}</p>`;


const beforeOrAfter = dateA < dateB ? "before" : "after";
output.innerHTML += `<p>4) ${dateA.toFormat('MMMM dd, yyyy')} is ${beforeOrAfter} ${dateB.toFormat('MMMM dd, yyyy')}</p>`;


const londonTime = now.setZone('Europe/London').toLocaleString(DateTime.DATETIME_FULL);
output.innerHTML += `<p>5) Current time in London: ${londonTime}</p>`;