

// ======================    =====================

var workT = document.getElementById("workT")
var breakT = document.getElementById("breakT")
var S_break = document.getElementById("break")
var S_work = document.getElementById("S_work")
var E_work = document.getElementById("E_work")
var Resume = document.getElementById("Resume");


var hh = 0;
var mm = 0;
var ss = 0;

var hh2 = 0;
var mm2 = 0;
var ss2 = 0;

var startInt ;
var breakInt ;

S_work.addEventListener("click", function () {
     startInt = setInterval(start, 1000)
    clearInterval(breakInt);

    // ==========
    S_work.setAttribute("disabled",true)
    Resume.setAttribute("disabled",true)
    S_break.removeAttribute("disabled",true)

})

S_break.addEventListener("click", function () {
    clearInterval(startInt)
    breakInt = setInterval(breakk, 1000) 

    // ============
    S_work.setAttribute("disabled",true)
    S_break.setAttribute("disabled",true)
    // ==========
    Resume.removeAttribute("disabled",true)

})



Resume.addEventListener("click",function () {
    startInt = setInterval(start, 1000)
    clearInterval(breakInt)

    // ===========
    Resume.setAttribute("disabled",true)
    S_work.setAttribute("disabled",true)
    // ==========
    S_break.removeAttribute("disabled",true)

})





E_work.addEventListener("click",
function () {
    clearInterval(startInt)
    clearInterval(breakInt)
   alert(` your work hour hour: ${hh-hh2} moment: ${mm-mm2} secend: ${ss-ss2}`)
})




function start() {
    
    ss++;

    if (ss == 60) {
        ss = 0;
        mm ++
        
    }
   
    if (mm== 60) {
        mm = 0;
        hh++
    }

     (ss<10)?ss="0"+ss:ss;
    //  (mm<10)?mm="0"+mm:mm;
    //  (hh<10)?hh="0"+hh:hh;
     
    workT.innerText = "0"+hh + " : " + "0"+mm + " : " + ss;

}

function breakk() {
    
    ss2++;

    if (ss2 == 60) {
        ss2 = 0;
        mm2++
        
    }
    
    if (mm2== 60) {
        mm2 = 0;
        hh2++
    }

    (ss2<10)?ss2="0"+ss2:ss2;

    breakT.innerText ="0"+hh2 + " : " + "0"+mm2 + " : " + ss2;

}