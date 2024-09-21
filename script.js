document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (age && height && weight) {
        const bmi = calculateBMI(height, weight);
        const category = getBMICategory(bmi, age, gender);
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter all fields correctly.';
    }
});

function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / height (m)^2
    return weight / Math.pow(height / 100, 2);
}

function getBMICategory(bmi, age, gender) {
    // BMI interpretation varies based on age and gender.
    if (age <= 18) {
        return getBMICategoryForChildren(bmi);
    } else if (age > 18 && age <= 64) {
        return getBMICategoryForAdults(bmi);
    } else {
        return getBMICategoryForOlderAdults(bmi);
    }
}

function getBMICategoryForChildren(bmi) {
    if (bmi < 14) {
        return 'Underweight (child)';
    } else if (bmi >= 14 && bmi <= 17) {
        return 'Normal weight (child)';
    } else {
        return 'Overweight/Obese (child)';
    }
}

function getBMICategoryForAdults(bmi) {
    if (bmi < 18.5) {
        return 'Underweight (adult)';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight (adult)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight (adult)';
    } else {
        return 'Obese (adult)';
    }
}

function getBMICategoryForOlderAdults(bmi) {
    if (bmi < 22) {
        return 'Underweight (older adult)';
    } else if (bmi >= 22 && bmi <= 27) {
        return 'Normal weight (older adult)';
    } else {
        return 'Overweight/Obese (older adult)';
    }
}
