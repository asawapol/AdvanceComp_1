var name = "Fatema"

function fun(){
    console.log(this.name)
}

const user = {
    name: "Marium",
    yearOfBirth: 1999,
    calAge: function(){
        const currentYear = (new Date()).getFullYear();
        return currentYear - this.yearOfBirth;
    }
}


fun();
user.calAge();
fun.call(user);

