// Respuestas correctas y sus explicaciones
const correctAnswers = {
    q1: {
        correct: "B",
        explanation: "Es mejor destacar una fortaleza relevante para el puesto, como la proactividad y adaptación a los cambios. Estas son cualidades valoradas en entornos laborales dinámicos."
    },
    q2: {
        correct: "A",
        explanation: "Es importante expresar tu opinión de manera respetuosa y buscar un entendimiento. Esto demuestra capacidad de comunicación y trabajo en equipo."
    }
};

function evaluateQuiz() {
    let score = 0;
    let results = '';
    let totalQuestions = 2;

    // Evaluar cada pregunta
    for (let i = 1; i <= totalQuestions; i++) {
        let userAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (userAnswer) {
            let questionKey = `q${i}`;
            if (userAnswer.value === correctAnswers[questionKey].correct) {
                score++;
                results += `<p><strong>Pregunta ${i}:</strong> Correcto. ${correctAnswers[questionKey].explanation}</p>`;
            } else {
                results += `<p><strong>Pregunta ${i}:</strong> Incorrecto. ${correctAnswers[questionKey].explanation}</p>`;
            }
        } else {
            results += `<p><strong>Pregunta ${i}:</strong> No respondida.</p>`;
        }
    }

    // Mostrar resultados
    let resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<h2>Resultados:</h2>${results}`;
    resultsContainer.style.display = 'block';
}
