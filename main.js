const workout = ["Chest", 
                    "Shoulders",
                     "Arms", 
                     "Back", 
                     "Legs",
                     "Full Body", 
                     "BWT"];

const chest = ["Benchpress", 
                "Dumbell Squeeze Press", 
                "Incline Barbell Bench Press", 
                "Incline Dumbell Bench Press",
                "Close-grip Barbell Bench Press",
                "Decline Press-up",
                "Cable Fly",
                "Decline Barbell Bench Press",];

const shoulders = ["Barbell Overhead Shoulder Press",
                    "Seated Dumbbell Shoulder Press",
                    "Front Raise",
                    "Reverse Pec Deck Fly",
                    "Bent-Over Dumbbell Lateral Raise",
                    "Dumbbell Lateral Raise",
                    "Push Press",
                    "Reverse Cable Crossover"];

const arms = ["Incline Bicep Curl",
                "Concentration Curl",
                "Twisting Dumbbell Curl",
                "Underhand Seated Row",
                "Reverse Curl Straight Bar",
                "Leant-forward EZ Bar Curl",
                "Reverse-grip EZ Bar Curl",
                "Prone Dumbbell Spider Curl"];

const back = ["Deadlift",
                "Bent-over Row",
                "Pull-up",
                "T-bar Row",
                "Seated Row",
                "Lat Pull-down",
                "Single-arm Dumbbell Row",
                "Dumbbell Pull-over"];

const leg = ["Back Squat",
                "Front Squat",
                "Romanian Deadlift",
                "Good Mornings",
                "Walking Lunges",
                "Reverse Lunge",
                "Lateral Lunge",
                "Stepup"];

const fullBody = ["Deadlifts",
                    "Kettlebell Swings",
                    "Dumbbell Thrusters",
                    "Burpees",
                    "Renegade Row",
                    "Bear Crawls",
                    "Back Squat",
                    "Pull-up"];

const bwt = ["Deep Squat",
                "Bulgarian Split Squat",
                "Squat Jump",
                "Bridge Kick",
                "Burpee",
                "Jump Lunge",
                "Spider-man Press-up",
                "Shrimp Squat"];

const hero = ["Spider-Man",
                    "Superman",
                    "Batman",
                    "Ironman",
                    "Hulk",
                    "Thor",
                    "Flash",
                    "Green Lantern",
                    "Black Widow",
                    "Captain America",
                    "Ant-Man",
                    "Scarlet Witch",
                    "Vison",
                    "Aquaman",
                    "Wonder Woman"];

const generateNumberWorkout = () => {
    var ranNumW = Math.floor(Math.random() * 7);
    return ranNumW;
};


const generateNumberSets = () => {
    var ranNumS = Math.floor(Math.random() * 8);
    return ranNumS;
};

const generateNumberHeros = () => {
    var ranNumH = Math.floor(Math.random() * 15);
    return ranNumH;
};

var selectWorkout = workout[generateNumberWorkout()];

var selectStets = [];

switch (selectWorkout){
    case "Chest":
        selectStets.push(chest[generateNumberSets()]);
        selectStets.push(chest[generateNumberSets()]);
        selectStets.push(chest[generateNumberSets()]);
        break;
    case "Shoulders":
        selectStets.push(shoulders[generateNumberSets()]);
        selectStets.push(shoulders[generateNumberSets()]);
        selectStets.push(shoulders[generateNumberSets()]);
        break;
    case "Arms":
        selectStets.push(arms[generateNumberSets()]);
        selectStets.push(arms[generateNumberSets()]);
        selectStets.push(arms[generateNumberSets()]);
        break;
    case "Back":
        selectStets.push(back[generateNumberSets()]);
        selectStets.push(back[generateNumberSets()]);
        selectStets.push(back[generateNumberSets()]);
        break;
    case "Legs":
        selectStets.push(leg[generateNumberSets()]);
        selectStets.push(leg[generateNumberSets()]);
        selectStets.push(leg[generateNumberSets()]);
        break;
    case "Full Body":
        selectStets.push(fullBody[generateNumberSets()]);
        selectStets.push(fullBody[generateNumberSets()]);
        selectStets.push(fullBody[generateNumberSets()]);
        break;
    case "BWT":
        selectStets.push(bwt[generateNumberSets()]);
        selectStets.push(bwt[generateNumberSets()]);
        selectStets.push(bwt[generateNumberSets()]);
        break;
    default: 
        console.log("something went wrong..." + selectWorkout);
};

var selectHero = hero[generateNumberHeros()];

var randomSentence = `Today you will do a ${selectWorkout} Workout, with ${selectStets.join(', ')} as sets. Your training partner will be ${selectHero}!`

console.log(randomSentence);