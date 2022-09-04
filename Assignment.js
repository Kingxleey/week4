let person ={
    studentName: "Okoli kingsley",
    discription: " Male, light, softspoken, tall",
    

    School: { 
        name: "Seamfix Nextgen academy",
        location:"Lekki lagos",
        activity:"Software development training ",
    },
   detail:function() {
        return this.studentName + this.discription  
    }
}
console.log(person.detail());

function attemptAssignment(nextgenWeek4){
    if (nextgenWeek4){
        return ("please kindley attempt assignment and push to github")
    }
     return ("kindly watch the pre recorded videos only")
     }
    console.log(attemptAssignment(true))