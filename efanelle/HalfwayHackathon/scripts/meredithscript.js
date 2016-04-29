
var TS = "Taylor Swift"
var Roy = "Rachel Roy"
var Ray = "Rachel Ray"
var DT = "Donald Trump"
var Mya = "Mya"
var Ri = "Rihanna"
var Aunt = "Aunt Becky"
var Fab = "Fabio"
var RO = "Rita Ora"
var HC = "Hillary Clinton"

var array = [TS, Roy, Ray, DT, Mya, Ri, Aunt, Fab, RO, HC]







var lightq2 = function() {
	delete array[1];
	delete array[2];
	delete array[4];
	delete array[5];
	delete array[6];
	document.getElementById('first').setAttribute('class', "visible");
	document.getElementById('button1').setAttribute('class', "invisible");
	document.getElementById('button2').setAttribute('class', "visible");
}

var darkq2 = function() {
	delete array[0];
	delete array[3];
	delete array[7];
	delete array[8];
	delete array[9];

}

var nextQues1 = function() {
	var hColor = $('input[value="Light"]:checked').val();
	hColor ? lightq2(): darkq2();
}

















// var hColor = $('input[value="Light"]:checked').val() 

// &! $('input[name="hColor"]:checked').val()

// var lives = $('input[name="lives"]:checked').val()

// var singer = $('input[name="singer"]:checked').val()

// var emails = $('input[name="emails"]:checked').val()

// var strip = $('input[name="strip"]:checked').val()

// var over30 = $('input[name="over30"]:checked').val()

// var celeb = $('input[name="celeb"]:checked').val()





// var lightVal = function() {
// 	console.log("WOWZA");
// 	var hColor = $('input[name="hColor"]').val();
// 	console.log(hColor);
// 	nextQues(hColor);
// }

// var darkVal = function() {
// 	console.log("OMGOMG");
// }

// var responseInitial = (hColor === "Light") ? true : false;
// console.log(responseInitial);


// if hColor === true  
// 	console.log("true")




// if responseInitial === true {

// }













// $(‘input[name='hColor']:checked’).val()


// var hColor = document.querySelector('#q1')



// if $(‘input[name='hColor']:checked’).val() === "Light" {
// 	console.log("It worked!");
// }

// <button onclick="nextQues()" id="ques1">Submit</button>

// var myVar = document.querySelector('#q1');

// myVar.onclick = function() {
// 	var num = Math.random();
// 	var imageNumber = Math.floor(num*20);
// 	var imageName = "images/" + imageNumber + ".png"
// 	myImage.setAttribute ('src', imageName);
// }



// var hcolor = "";
// var ny = "";
// var sing = "";
// var o30 = "";
// var dem = "";
// var cel = "";
// var strip = "";
// var i;
// var str = "";


// var taylorSwift =     [true, true, true, false, false, true, false];
// var donaldTrump =     [true, true, false, true, false, true, false ];
// var hillaryClinton =  [true, true, false, true, true, false, false];
// var auntBenty =       [true, false, false, true, false, false, false];
// var fabio =           [true, false, false, true, false, true, false];
// var ritaOra =         [false, false, true, true, false, true, false];
// var rachelRay =       [false, false, false, true, false, true, false];
// var rachelRoy =       [false, true, false, true, false, false, false];
// var mya =             [false, true, true, true, false, true, true ];
// var rihana =          [false, false, true, true, false, true, false];
// var misteryPerson =   [false, false, false, false, false, false, false];


// function getAnswer(n,i){
//   i = i-1;
//   misteryPerson[i] = (n === 1) ? 1 : 0;
  
// }




// misteryPerson[0] = (hcolor === Light) ? true : false



// misteryPerson[1] = (ny === Light) ? true : false


// if document.getElementById("#initial") === true {
// }//html click event

// $(‘input[name='question1a']:checked’).val()