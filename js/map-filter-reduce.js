// 1. Data set
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let newUser = users.filter(user => user.languages.length >= 3);
console.log("newUser :", newUser);

    // 3. Use .map to create an array of strings where each element is a user's email address

const emails = users.map(user => user.email);
console.log("emails :", emails);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYearsOfExperience = users.reduce((previousValue, currentValue) => {
    console.log("previousValue, currentValue :", previousValue, currentValue);
    return previousValue + currentValue.yearsOfExperience
},0);

console.log("totalYearsOfExperience :", totalYearsOfExperience);

const avgYears = totalYearsOfExperience / users.length;

console.log("avgYears:", avgYears)

//     5.Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((previousValue, currentValue) => {
    if(currentValue.email.length > previousValue.length) previousValue = currentValue.email;
    return previousValue;
},"")

console.log("longestEmail:", longestEmail)

//    6. Use .reduce to get the list of user's names in a single string.

const instructorsString = users.reduce((previousValue, currentValue, currentIndex, array) => {
    let delimiter = ",";
    // 5 = 5 -> change the delimiter to a period
    if(currentIndex === (array.length-1)) delimiter = ".";

    return previousValue + currentValue.name + delimiter + " ";
}, "Your instructors are: ")


console.log("instructorsString :", instructorsString);