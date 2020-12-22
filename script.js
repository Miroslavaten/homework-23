// first task
const string = "aoaoaoao";
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string [i] === "o") {
        count++
    }
}

if (count % 2 === 0) {
    console.log(true)
} else { console.log(false)}

// second task
const fines = [200, 100, 100];
let sum = 0;

for ( let i = 0; i < fines.length; i++) {
    sum = sum + fines[i]
}

if (sum > 3000) {
    console.log("red zone")
} else if (sum < 500) {
    console.log("green zone")
} else { console.log ("yellow zone")
}


// third task
const a = 10, b = 5, c = 5;
if (a + b > c) {
    console.log("правильно!")
} else {
    console.log("некорректный размер сторон треугольника")
}