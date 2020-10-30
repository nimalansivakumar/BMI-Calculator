// referencing elements
var displayImg = document.querySelector('#img-result');
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");

//function to calculate and display result
function calculateBMI(){
   var height_meters = heightEl.value / 100;
   var weight_kgs = weightEl.value;
   var result = (weight_kgs) / (height_meters * height_meters);
   var result = result.toFixed(2);
   //console.log(result); 

   heightEl.value = '';
   weightEl.value = '';

   if(result < 18.5){
      viewLayer(result , 'You are underweight.Take good food.' ,
       height_meters , weight_kgs , "img/underweight.png");
   }
   else if(result >=18.5 && result <=24.9){
      viewLayer(result , 'You are normal.Maintain the same diet and workout.' ,
       height_meters , weight_kgs , "img/normal.png");
   }
   else if(result >=25.0 && result <=29.9){
      viewLayer(result , 'You are overweight.Reduce junk foods and start workout.'
       , height_meters , weight_kgs , "img/overweight.png");
   }
   else if(result > 29.9){
      viewLayer(result , 'You are Obese.Don\'t get near junk foods.Start your workout today.' ,
       height_meters , weight_kgs , "img/obese.png");
   }
   else{
      viewLayer(result , 'Enter some values!' , height_meters , weight_kgs , "img/remove.png");
   }
}

//viewLayer
function viewLayer(bmi , result_in_words , height_meters , weight_kgs , image_src){
   document.getElementById('result-1').textContent = 'Your BMI is ' + bmi;
   document.getElementById('result-2').textContent = result_in_words;
   document.getElementById('hei').textContent = 'Height: '+ height_meters +' m';
   document.getElementById('wei').textContent = 'Weight: '+weight_kgs+' kgs';
   displayImg.style.transition = 'all 0.5s';
   displayImg.src = image_src;
}

//click element
document.getElementById("btn").addEventListener('click',calculateBMI,false);
weightEl.addEventListener('keyup', (e) =>{
   if(e.keyCode === 13){
      calculateBMI();
   }
});
