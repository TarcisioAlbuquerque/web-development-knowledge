/* Small quiz controller. Expected markup is documented in the starter-kit README. */
(() => {
  const activeRoots = new WeakMap();

  function initQuizzes(root = document) {
    activeRoots.get(root)?.();
    const cleanups = [];
    const addListener = (target, type, fn) => {
      target.addEventListener(type, fn);
      cleanups.push(() => target.removeEventListener(type, fn));
    };

    root.querySelectorAll("[data-quiz]").forEach((quiz) => {
      const questions = Array.from(quiz.querySelectorAll("[data-quiz-question]"));
      const progress = quiz.querySelector("[data-quiz-progress]");
      const scoreOutput = quiz.querySelector("[data-quiz-score]");
      const result = quiz.querySelector("[data-quiz-result]");
      const resultScore = quiz.querySelector("[data-quiz-result-score]");
      const restart = quiz.querySelector("[data-quiz-restart]");
      if (!questions.length) return;

      let score = 0;
      let currentIndex = 0;

      const showQuestion = (index, moveFocus = false) => {
        currentIndex = index;
        questions.forEach((question, i) => { question.hidden = i !== index; });
        if (progress) progress.textContent = "Pergunta " + (index + 1) + " de " + questions.length;
        if (scoreOutput) scoreOutput.textContent = String(score);
        if (moveFocus) {
          const heading = questions[index].querySelector("[data-quiz-question-title], h2, h3");
          heading?.focus?.();
        }
      };

      const finish = () => {
        questions.forEach((question) => { question.hidden = true; });
        if (result) {
          result.hidden = false;
          const heading = result.querySelector("h2, h3, [data-quiz-result-title]");
          heading?.focus?.();
        } else if (progress) {
          progress.textContent = "Quiz concluído. Resultado: " + score + " de " + questions.length + ".";
        }
        if (resultScore) resultScore.textContent = String(score);
      };

      questions.forEach((question, index) => {
        const answers = Array.from(question.querySelectorAll("[data-quiz-answer]"));
        const feedback = question.querySelector("[data-quiz-feedback]");
        const next = question.querySelector("[data-quiz-next]");
        if (feedback) feedback.hidden = true;
        if (next) next.hidden = true;

        if (!answers.length) {
          question.dataset.quizInvalid = "true";
          return;
        }

        answers.forEach((answer) => {
          addListener(answer, "click", () => {
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
          addListener(next, "click", () => {
            if (question.dataset.answered !== "true") return;
            if (index < questions.length - 1) showQuestion(index + 1, true);
            else finish();
          });
        }
      });

      const reset = () => {
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
        showQuestion(0);
      };

      if (restart) addListener(restart, "click", reset);
      reset();
    });

    const cleanup = () => {
      cleanups.forEach((remove) => remove());
      if (activeRoots.get(root) === cleanup) activeRoots.delete(root);
    };
    activeRoots.set(root, cleanup);
    return cleanup;
  }

  window.MotionQuiz = {
    init: initQuizzes,
    destroy(root = document) { activeRoots.get(root)?.(); }
  };
  initQuizzes(document);
})();
