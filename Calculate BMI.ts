export function bmi(weight: number, height: number): string {
  let bmi = weight/(height**2);
  let result = ''
  if(bmi<=18.5){result="Underweight"}
  else if(bmi<=25.0){result="Normal"}
  else if(bmi<=30.){result="Overweight"}
  else if(bmi>30){result="Obese"}
  return result
}
