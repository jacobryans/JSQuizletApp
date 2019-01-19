const mainContainer = document.getElementById('container');
console.log(mainContainer);

//Setting const to Id 'nav' and pulling its a child tag  
const nav = document.getElementById('nav');
const anchors = nav.querySelectorAll('a');

const answerblock = document.getElementById('answers');
const answers = document.querySelectorAll('button');

const questionblock = document.getElementById('qtext');

//Array of Objects that includes our questions, choices, and answers

const quizQuestions = [

    {
	question: 'What is 2 + 2',

	answer: {
		A: 1,
		B: 10,
		C: 12,
		D: 4

 },
		correctAnswer: 'D'
    },

    {
	question: 'What is the capital of New York',

	answer: {
		A: 'Manhattan',
		B: 'White Plains',
		C: 'Albany',
		D: 'Brooklyn'
  },

	  correctAnswer: 'C'

    },

    {
	question: 'Who is the Vice President of The U.S.A.',

	answer: {
		A: 'Mike Pence',
		B: 'Joe Biden',
		C: 'Barack Obama',
		D: 'Donald Trump'
		
  },
	  correctAnswer: 'A'
    },
    {
  question: 'Who is the Vice President of The A.S.A.',

	answer: {
		A: 'Mike Pence',
		B: 'Joe Biden',
		C: 'Barack Obama',
		D: 'Donald Trump'
		
  },
	correctAnswer: 'A'
  },
  {
  question: 'Who is the Vice President of The U.A.S.',

	answer: {
		A: 'Mike Pence',
		B: 'Joe Biden',
		C: 'Barack Obama',
		D: 'Donald Trump'
		
  },
	correctAnswer: 'A'
  }
];

anslist = (i, index) => { 
  if (i === 0) { return quizQuestions[index].answer.A } 
  if (i === 1) { return quizQuestions[index].answer.B }
  if (i === 2) { return quizQuestions[index].answer.C }
  if (i === 3) { return quizQuestions[index].answer.D }
};

quizQuestions.prototype = {
  setupContent: () => {
    randomIndex = Math.floor(Math.random() * 5);
    for(let i = 0; i < 4; i++) {
      answers[i].textContent = anslist(i, randomIndex);
    }
    questionblock.innerHTML = quizQuestions[randomIndex].question;
  }
}

quizQuestions.prototype.setupContent();

console.log(answers[0]);

console.log(quizQuestions[2].question); // How to access question
console.log(quizQuestions[2].answer.A); // How to access individual answers
console.log(quizQuestions[2].correctAnswer); // How to access correct answer