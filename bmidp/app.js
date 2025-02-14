function calculateBMI() {

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; 

   
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 

   
    document.getElementById("result").textContent = `Your BMI is: ${bmi}`;

   
    let dietPlan = "";
    if (bmi < 18.5) {
        dietPlan = `
            <strong>Diet Plan for Underweight:</strong><br>
            - Focus on calorie-dense foods.<br>
            - Eat protein-rich foods to build muscle.<br>
            - Include healthy fats like nuts, seeds, and avocados.<br>
            - Have 3-4 meals and 2-3 snacks daily.
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        dietPlan = `
            <strong>Diet Plan for Normal Weight:</strong><br>
            - Maintain a balanced diet with a variety of nutrients.<br>
            - Focus on whole grains, lean proteins, and vegetables.<br>
            - Limit processed foods and sugar intake.<br>
            - Eat 3 balanced meals a day with healthy snacks.
        `;
    } else if (bmi >= 25 && bmi <= 29.9) {
        dietPlan = `
            <strong>Diet Plan for Overweight:</strong><br>
            - Focus on portion control and calorie management.<br>
            - Increase fiber intake with vegetables and fruits.<br>
            - Limit processed foods, sugars, and fatty foods.<br>
            - Include physical activity with a healthy diet.
        `;
    } else {
        dietPlan = `
            <strong>Diet Plan for Obesity:</strong><br>
            - Focus on a calorie deficit to promote weight loss.<br>
            - Include lean proteins, vegetables, and whole grains.<br>
            - Avoid sugary and high-fat foods.<br>
            - Work with a healthcare provider or nutritionist for a personalized plan.
        `;
    }

   
    document.getElementById("diet-plan").innerHTML = dietPlan;
}