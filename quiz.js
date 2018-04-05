function getScore(){

answers=["it is the algorithm that get true answer in a short time but the the optimized one",
"it is a data structure that has nodes and distributed on some levels as a tree"];

answer1=document.getElementById("answer1").value;
answer2=document.getElementById("answer2").value;

alert(answer1)
alert(answer2)

if ((answer1.indexOf(answers[0])!=-1) && (answer2.indexOf(answers[1])!=-1))
    alert('Score 2/2')

else
    alert('Score 0')

}