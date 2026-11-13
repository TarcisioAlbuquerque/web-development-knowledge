/* Motion Starter Kit — small accessible quiz controller.
   Expected markup is documented in the starter-kit README and INTERACTIVE-COMPONENTS.md. */
(() => {
  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const questions = [...quiz.querySelectorAll("[data-quiz-question]")];
    const progress = quiz.querySelector("[data-quiz-progress]");
    const scoreOutput = quiz.querySelector("[data-quiz-score]");
    const result = quiz.querySelector("[data-quiz-result]");
    const resultScore = quiz.querySelector("[data-quiz-result-score]");
    const restart = quiz.querySelector("[data-quiz-restart]");
    if (!questions.length) return;

    let currentIndex = 0;
    let score = 0;

    const showQuestion = (index) => {
      questions.forEach((question, questionIndex) => {
        question.hidden = questionIndex !== index;
      });
      if (progress) progress.textContent = `Pergunta ${index + 1} de ${questions.length}`;
      if (scoreOutput) scoreOutput.textContent = String(score);
    };

    const finish = () => {
      questions.forEach((question) => { question.hidden = true; });
      if (result) result.hidden = false;
      if (resultScore) resultScore.textContent = String(score);
    };

    questions.forEach((question, index) => {
      const answers = [...question.querySelectorAll("[data-quiz-answer]")];
      const feedback = question.querySelector("[data-quiz-feedback]");
      const next = question.querySelector("[data-quiz-next]");
      if (feedback) feedback.hidden = true;
      if (next) next.hidden = true;

      answers.forEach((answer) => {
        answer.addEventListener("click", () => {
          if (question.dataset.answered === "true") return;
          question.dataset.answered = "true";
          const correct = answer.dataset.correct === "true";
          if (correct) score += 1;

          answers.forEach((option) => {
            option.disabled = true;
            option.setAttribute("aria-pressed", String(option === answer));
          });

          if (feedback) {
            feedback.textContent = answer.dataset.feedback || (correct ? "Resposta correta." : "Vamos aprender com esta resposta.");
            feedback.hidden = false;
          }
          if (scoreOutput) scoreOutput.textContent = String(score);
          if (next) next.hidden = false;
        });
      });

      if (next) {
        next.addEventListener("click", () => {
          if (question.dataset.answered !== "true") return;
          if (index < questions.length - 1) {
            currentIndex = index + 1;
            showQuestion(currentIndex);
            const heading = questions[currentIndex].querySelector("h2, h3, [data-quiz-question-title]");
            heading?.focus?.();
          } else {
            finish();
          }
        });
      }
    });

    const reset = () => {
      currentIndex = 0;
      score = 0;
      questions.forEach((question) => {
        delete question.dataset.answered;
        question.querySelectorAll("[data-quiz-answer]").forEach((answer) => {
          answer.disabled = false;
          answer.removeAttribute("aria-pressed");
        });
        const feedback = question.querySelector("[data-quiz-feedback]");
        const next = question.querySelector("[data-quiz-next]");
        if (feedback) feedback.hidden = true;
        if (next) next.hidden = true;
      });
      if (result) result.hidden = true;
      showQuestion(currentIndex);
    };

    restart?.addEventListener("click", reset);
    reset();
  });
})();
