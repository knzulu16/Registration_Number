
var regNumber=document.querySelector('options');
// var ul=document.getElementById('output');
var drop=document.querySelector('#drop');
const form=document.getElementById('regNo');
const input=form.querySelector('#textSearch');
var regPlace='';
var regNo=document.getElementById('options');
var textSearch='';

form.addEventListener('button',function(e){
 e.preventDefault();
 const text=input.value;
});

 var regNums = [];
function addReg(){
  const text=input.value;
  input.value='';
    const ul=document.getElementById('output');
    // var myNodelist = document.getElementsByTagName("p");
      const li=document.createElement('li');
        li.textContent=text;
        //console.log(text);
       // document.getElementById("output").innerHTML = li.value;
ul.appendChild(li);
// regNums.push(text);
}

drop.addEventListener('change',function(e){

  var allRegNumbers = document.querySelectorAll('li');

  //show all

  //hide the appropriate ones
  // console.log(allRegNumbers);
  for(var i=0;i<allRegNumbers.length;i++){
    if(allRegNumbers[i].innerHTML.startsWith(e.target.value)){
       console.log(allRegNumbers[i]);
      allRegNumbers[i].style.display='block'
    }
    //allRegNumbers.li.show('All');
    else if(drop.value==='all'){
      allRegNumbers[i].style.display='block'
    }
    else {
      allRegNumbers[i].style.display='none'
    }
  }
});
// localStorage.setItem('onchange');


  /*
  for(var i=0;i<regNums.length;i++){
    console.log(e.target.value);
    if(!regNums[i].startsWith(e.target.value)){
      console.log(regNums[i]);
      regNums[i].style.display='none'
    }
  }
  */

  // console.log(regNums);
  // console.log(e.target.value);

//
// console.log(regNums);
// function SelectedTowns(e){
//   console.log(e.target.value);
  //if(input.value.startsWith('CY')){
    // console.log(input.value);
  //}
// var regNo='';
// var list=[];
// for(var i=0;i<regNo.length;i++){
//   if(regNo[i].startsWith('CY'){
//     list.push(regNo[i]);

    //innerHTML='Bellville'.value;
    // console.log(regNo.startsWith);

//}

//
// else if(regNo.startsWith('CN'){
//   output.innerHTML='Wellington'.value;
//
// }
//
// else if(regNo.startsWith('CJ')){
//   output.innerHTML='Paarl'.value;
// }
// else if(regNo.startsWith('CV')){
//   output.innerHTML='Vredendal'.value;
// }
// else if(regNo.startsWith('CL')){
//   output.innerHTML='Stellenbosch'.value;
//
// }
// // console.log(SelectedTowns);
// li.output.add('hidden');
// li.output.show('hidden');
// }
// }
//
//
//
// function regNumber(regNo){
//   return regNo.startsWith('CA');
//         ||regNo.startsWith('CV');
//         ||regNo.startsWith('CJ');
//         ||regNo.startsWith('CN');
//         ||regNo.startsWith('CY');
//         ||regNo.startsWith('CL');
//
//         options.document.addEventListener('change', function(e)){
//           var drop=e.target.value;
//           var regNo=document.querySelectorAll('regNo');
//           for(var i=0;i<regNo.length;i++){
//             var elem=regNo[i];
//             if(elem.innerHTML.startsWith(drop)){
//               elem.output.add('hidden');
//             }
//             }
//           }
//       });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





































































































































//
// function add(){
//     var Bbtn = document.createElement("button");
//     var a = document.createTextNode("CK 10705");
//     btnSearch.appendChild(a);
//     document.body.appendChild(btnSearch);
// }
// function text(){
//     var btnSearch = document.createElement("button");
//     var b = document.createTextNode("CA 12081");
//     btnSearch.appendChild(b);
//     document.body.appendChild(btnSearch);
//
//
// }
//








//
// function myFunction() {
//     var add = document.getElementById('output');
//     if (add.style.display === 'none') {
//         add.style.display = 'block';
//     } else {
//         a.style.display = 'none';
//     }
// }


























//
// button.addEventListener("click", function(){
//   if(regPlace=='Bellville'){
//     // console.log(language);
//     document.createTextNode('');
//   output.innerHTML='CY 54824' + list.value;
// }
//
// else if(regPlace=='Wellington'){
//   document.createTextNode('');
//   output.innerHTML='CN 48625' + list.value;
//
// }
//
// else if(regPlace.=='Paarl'){
//   document.createTextNode('');
//   output.innerHTML='CJ 78954 ' + list.value;
// }
// else if(regPlace=='Vredendal'){
//   document.createTextNode('');
//   output.innerHTML='CV 32589' + list.value;
// }
// else if(regPlace=='Stellenbosch'){
//   document.createTextNode('');
//   output.innerHTML='CL ' + list.value;
// }
// });
