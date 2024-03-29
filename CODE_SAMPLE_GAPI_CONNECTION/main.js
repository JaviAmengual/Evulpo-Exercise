// alert('js loaded!')
// this is a basic structure for evaluation of a single choice exercise
// INTENTIONALLY parts of the code have been deleted. 
//  It should serve as a hint towards finding a suitable solution for single choice exercise
// Written by GSoosalu ndr3svt

let options = ['this','this not', 'this either']
let states = [false,false,false]
let correct_answer_index= 0

document.addEventListener('DOMContentLoaded', init)

function init(){
	let optionsContainer=document.querySelector('#options-wrapper')
	for(let i = 0; i< options.length; i++){
		optionsContainer.innerHTML+= "<button id='option"+i+"' class='unchosen option' onclick='toggleChoice("+i+")'><p class='text'>"+options[i]+"</p></button> </br>"
	}
}

function toggleChoice(i){
	if(states[i]) {
		deselectOption(i)
	} else {
		if(states.includes(true)) {
			const index = states.findIndex(element => element == true)
			deselectOption(index)
		}
		states[i] = true
		let optionSelected=document.querySelector('#option' + i)
		optionSelected.className='chosen option'
	}
}

function deselectOption(i) {
	states[i] = false
	let optionSelected=document.querySelector('#option' + i)
	optionSelected.className='unchosen option'
}


function myEvaluation(){
	let evMessage = document.querySelector('#evaluation-message')
	for(let i = 0; i<options.length; i++){
		if(states[i] && i == correct_answer_index){
			evMessage.innerHTML = '<p>Awesome!</p>'
			console.log('awesome')
			break
		}
		else{
			evMessage.innerHTML = '<p>Keep trying!</p>'
			console.log('tryAgain')
			break
		}
	}
}