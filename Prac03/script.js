function calculateBMI()
{
    let weight=document.getElementById("weight-el").value;
    let height=document.getElementById("height-el").value;
    if(weight>0&&height>0)
    {
        let bmi=(weight/(height*height))*10000;
        bmi=bmi.toFixed(1)
        if(bmi>=18.5 && bmi<=24.9)
        {
            let print="Your BMI is " + bmi + "which means You are Normal!";
            document.getElementById("final-result").textContent=print;
        }
        else if(bmi>=25.0 && bmi<=29.9)
        {
            let print="Your BMI is " + bmi + " which means You are Overweight! ";
            document.getElementById("final-result").textContent=print;
        }
        else if(bmi>=30.0)
        {
            let print="Your BMI is " + bmi + " which means You are Obese!";
            document.getElementById("final-result").textContent=print;
        }
        else
        {
            let print="Your BMI is " + bmi + " which means You are underweight!";
            document.getElementById("final-result").textContent=print;
        }
    }
    else
    {
        alert("Please enter valid Weight & Height")
    }

}