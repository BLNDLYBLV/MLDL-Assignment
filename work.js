// import * as data from './data.js'

// var dataset = JSON.parse(data)

var inp11 = document.getElementById('inp11')
var inp12 = document.getElementById('inp12')
var inp13 = document.getElementById('inp13')
var inp14 = document.getElementById('inp14')
var inp15 = document.getElementById('inp15')
var q1ans;

var inp21 = document.getElementById('inp21')
var inp22 = document.getElementById('inp22')
var inp23 = document.getElementById('inp23')
var inp24 = document.getElementById('inp24')
var inp25 = document.getElementById('inp25')
var q2ans;

var inp31 = document.getElementById('inp31')
var inp32 = document.getElementById('inp32')
var inp33 = document.getElementById('inp33')
var inp34 = document.getElementById('inp34')
var inp35 = document.getElementById('inp35')
var q3ans;

var inp41 = document.getElementById('inp41')
var inp42 = document.getElementById('inp42')
var inp43 = document.getElementById('inp43')
var inp44 = document.getElementById('inp44')
var inp45 = document.getElementById('inp45')
var q4ans;

var result = document.getElementById('result')

var changeOfAnswer=(id)=>{
    if(id[3]==1){
        if(q1ans==undefined){
            var selected=document.getElementById(id);
            q1ans=id;
            selected.checked=true;
        }
        else{
            var current=document.getElementById(q1ans);
            var selected=document.getElementById(id);
            current.checked=false;
            q1ans=undefined;
            if(current!=selected){
                q1ans=id;
                selected.checked=true;
            }
        }
    }
    if(id[3]==2){
        if(q2ans==undefined){
            var selected=document.getElementById(id);
            q2ans=id;
            selected.checked=true;
        }
        else{
            var current=document.getElementById(q2ans);
            var selected=document.getElementById(id);
            current.checked=false;
            q2ans=undefined;
            if(current!=selected){
                selected.checked=true;
                q2ans=id;
            }
        }
    }
    if(id[3]==3){
        if(q3ans==undefined){
            var selected=document.getElementById(id);
            q3ans=id;
            selected.checked=true;
        }
        else{
            var current=document.getElementById(q3ans);
            var selected=document.getElementById(id);
            current.checked=false;
            q3ans=undefined;
            if(current!=selected){
                selected.checked=true;
                q3ans=id;
            }
        }
    }
    if(id[3]==4){
        if(q4ans==undefined){
            var selected=document.getElementById(id);
            q4ans=id;
            selected.checked=true;
        }
        else{
            var current=document.getElementById(q4ans);
            var selected=document.getElementById(id);
            current.checked=false;
            q4ans=undefined;
            if(current!=selected){
                selected.checked=true;
                q4ans=id;
            }
        }
    }
}
// var guide;
// fetch("./results.json")
// .then(response => {})
// .then((data) => {guide=data});
var dataset;

fetch("./results.json")
.then(response => {
   return response.json();
})
.then((data) => {dataset=data.results;});



var submit = ()=>{
    var resid=Number(q1ans[4]-1)+(Number(q2ans[4]-1)*5)+(Number(q3ans[4]-1)*25)+(Number(q4ans[4]-1)*125)
    // console.log(q1ans[4],q2ans[4],q3ans[4],q4ans[4],resid);
    var res=dataset[resid];
    if(res==1){
        result.innerHTML=' It is possible that you may have COVID-19, Taking a COVID test as soon as possible is advised'
    }
    else{
        result.innerHTML=' The symptoms you have are maybe due to common cold or allergy and it is not likely of being COVID-19 '
    }
}