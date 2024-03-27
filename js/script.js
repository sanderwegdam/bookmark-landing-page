// Get all question elements
const questions = document.querySelectorAll('.question');

// Loop through each question
questions.forEach(question => {
  // Get the associated answer element
    const answer = question.nextElementSibling;
    answer.style.display = 'none';
  // Add click handler to question
    question.addEventListener('click', () => {
        // Toggle visibility of answer
           if (answer.style.display === 'block') {
              answer.style.display = 'none';
            } else {
        document.querySelectorAll('.answer').forEach(a => {
            a.style.display = 'none';
        });
        answer.style.display = 'block';
     }
  });
});

