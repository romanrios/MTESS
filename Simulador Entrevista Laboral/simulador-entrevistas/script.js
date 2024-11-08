const questions = [
    {
        question: "¿Cuál es tu mayor fortaleza?",
        options: [
            "Soy perfeccionista",
            "Trabajo bien en equipo",
            "No tengo debilidades"
        ],
        correctAnswer: 1,
        explanation: "Trabajar bien en equipo demuestra habilidades sociales y colaboración, aspectos muy valorados en el entorno laboral."
    },
    {
        question: "¿Cómo manejas el estrés en el trabajo?",
        options: [
            "Ignoro el estrés y sigo adelante",
            "Busco soluciones prácticas para los problemas",
            "Tomo descansos largos"
        ],
        correctAnswer: 1,
        explanation: "Buscar soluciones prácticas es clave para mantener la productividad bajo presión, sin dejar que el estrés afecte tu desempeño."
    },
    {
        question: "¿Por qué deberíamos contratarte?",
        options: [
            "Porque soy el mejor candidato",
            "Porque puedo aportar habilidades valiosas al equipo",
            "Porque necesito el trabajo"
        ],
        correctAnswer: 1,
        explanation: "Enfocarte en cómo puedes aportar valor al equipo y a la empresa demuestra profesionalismo y alineación con los objetivos de la organización."
    }
];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = questions[currentQuestion].question;

    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    questions[currentQuestion].options.forEach((option, index) => {
        const optionItem = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = index;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionItem.appendChild(label);
        optionsList.appendChild(optionItem);
    });

    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsList);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = parseInt(selectedOption.value);
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert("Por favor selecciona una opción.");
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    questions.forEach((question, index) => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;

        const correctAnswer = document.createElement('p');
        const userAnswer = userAnswers[index] === question.correctAnswer ? "correcta" : "incorrecta";
        correctAnswer.textContent = `Tu respuesta fue ${userAnswer}. La respuesta correcta es: "${question.options[question.correctAnswer]}"`;

        const explanation = document.createElement('p');
        explanation.textContent = `Explicación: ${question.explanation}`;

        resultElement.appendChild(questionTitle);
        resultElement.appendChild(correctAnswer);
        resultElement.appendChild(explanation);

        quizContainer.appendChild(resultElement);
    });
}

window.onload = function() {
    loadQuestion();
};
