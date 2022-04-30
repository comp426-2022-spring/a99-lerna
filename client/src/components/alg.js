// alg to recommend exercise from table based on height, weight, etc
// no cals?

// exercise tables
const cutEx = ["Jogging/Running", "Cycling", "Yoga"]
const bulkEx = ["Chest/Core Day", "Back Day", "Leg Day", "Arm Day"]
const maintainEx = ["Walking", "Strength Training", "Pilates"]

function recommend(height, weight, goal) {
    // figure out how to import from database (!!!)
    // in inches
    var heightInm = height * 2.54 / 100;
    // in pounds
    var weightInKg = weight * 0.45359237;
    // cut, bulk, maintain
    // weeks?
    var weeks = 0;
    //BMI
    var BMI = weightInKg / (heightInm * heightInm);
    //result
    var exRecommendation = ""
    var message = ""

    // cut
    if (goal == "cut") {
        // picking random exercise
        exRecommendation = cutEx[Math.floor(Math.random() * cutEx.length)]
        // recommending it
        if (exRecommendation == "Jogging/Running") {
            message = "Do a 25 minute HIIT workout. 1 minute running intervals with a 1:30 walking break. Warm-up and cool down with a 5 minute walk.\n"
        } else if (exRecommendation == "Cycling") {
            message = "Go on a 45-60 minute ride for greatest weight loss benefit.\n"
        } else if (exRecommendation == "Yoga") {
            message = "Practice as often as possible to lose weight. There are guides online.\n"
        } else {
            message = "i got the wrong recommendation somehow...\n"
        }
        // adjusting for weight
        if (BMI < 25) {
            // healthy weight
            message = message + "\n" + "Keep up the good work!\n"
        } else if (BMI >= 25 || BMI < 30) {
            // overweight
            message = message + "\n" + "Also: incorporate a 500 calorie deficit with these workouts.\n"
        } else if (BMI >= 30) {
            // obese
            message = message + "\n" + "Also: incorporate a 500 calorie deficit with these workouts.\n"
            message = message + "\n" + "Take things at your own pace. Keep it up!\n"
        }

    // time to bulk
    } else if (goal == "bulk") {
        // picking random exercise
        exRecommendation = bulkEx[Math.floor(Math.random() * bulkEx.length)]
        // recommending it
        if (exRecommendation == "Chest/Core Day") {
            message = "Choose from: Wide-Arm Pushups, Plank Jacks, Hollow Holds\n"
        } else if (exRecommendation == "Back Day") {
            message = "Choose from: Deadlifts, Lat pulldown, Bent-Over Rows\n"
        } else if (exRecommendation == "Leg Day") {
            message = "Do some squats.\n"
        } else if (exRecommendation == "Arm Day") {
            message = "Choose from: Bicep curls, pull ups, Cactus Arms\n"
        } else {
            message = "i got the wrong recommendation somehow...\n"
        }
        // adjusting for weight
        if (BMI < 25) {
            // healthy weight
            message = message + "\n" + "12 reps/5 sets.\n"
        } else if (BMI >= 25 || BMI < 30) {
            // overweight
            message = message + "\n" + "12 reps/5 sets.\n"
            message = message + "\n" + "Also: incorporate a 500 calorie deficit with these workouts.\n"
        } else if (BMI >= 30) {
            // obese
            message = message + "\n" + "12 reps/8 sets.\n"
            message = message + "\n" + "Also: review your dieting and take things at your own pace.\n"
        }
    } else if (goal == "maintain") {
            // picking random exercise
            exRecommendation = maintainEx[Math.floor(Math.random() * maintainEx.length)]
            // recommending it
            if (exRecommendation == "Walking") {
                message = "Walk at least 150 minutes per week to maintain weight.\n"
            } else if (exRecommendation == "Strength Training") {
                message = "Choose from: Resistance Tubing, Free weights, Cable Suspension Training\n"
            } else if (exRecommendation == "Pilates") {
                message = "Join a class or follow a YouTube video.\n"
            } else {
                message = "I got the wrong recommendation somehow...\n"
            }
            // no adjusting for weight 
    }
    // returning recommendation + BMI notification
    var BMInotif = "Your BMI is: " + BMI
    var complete = message + BMInotif

    return [message, BMInotif]
}

export default recommend;