const search = prompt(
  "Search key to search available blood donors,Default search option is Name/ContactNumber/Location/Blood Group"
);

const result = members.filter(
  (data) =>
    data.name === search ||
    data.bloodType === search ||
    data.location === search ||
    data.contactNumber === search
);

const finalResult = [];

result.forEach((items, index) => {
  finalResult.push(items);
});

console.table(finalResult);
