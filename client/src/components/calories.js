import React from "react";

function calories(height, weight, goal) {

    var base = (4.536 * weight) + (24.4 * height);

    if (goal == "bulk") {
        return "Consume " + Math.round(base * 1.07) + " calories to " + goal + ".";
    } else if (goal == "cut") {
        return "Consume " + Math.round(base * .9) + " calories to " + goal + ".";
    } else {
        return "Consume " + Math.round(base) + " calories to " + goal + ".";
    }

}

export default calories;