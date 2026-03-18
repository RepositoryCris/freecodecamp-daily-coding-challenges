function getMilestone(years) {
  const milestones = [
    { year: 70, name: "Platinum" },
    { year: 60, name: "Diamond" },
    { year: 50, name: "Gold" },
    { year: 40, name: "Ruby" },
    { year: 25, name: "Silver" },
    { year: 10, name: "Tin" },
    { year: 5, name: "Wood" },
    { year: 1, name: "Paper" },
  ];

  for (let milestone of milestones) {
    if (years >= milestone.year) {
      return milestone.name;
    }
  }
  return "Newlyweds";
}

console.log(getMilestone(0)); //should return "Newlyweds".
console.log(getMilestone(1)); //should return "Paper".
console.log(getMilestone(8)); //should return "Wood".
console.log(getMilestone(10)); //should return "Tin".
console.log(getMilestone(26)); //should return "Silver".
console.log(getMilestone(45)); //should return "Ruby".
console.log(getMilestone(50)); //should return "Gold".
console.log(getMilestone(64)); //should return "Diamond".
console.log(getMilestone(71)); //should return "Platinum".

/*Anniversary Milestones
Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

Years Married	Milestone
1	"Paper"
5	"Wood"
10	"Tin"
25	"Silver"
40	"Ruby"
50	"Gold"
60	"Diamond"
70	"Platinum"
If they haven't reached the first milestone, return "Newlyweds".*/
