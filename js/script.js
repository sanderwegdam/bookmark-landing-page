// Get all question elements
const questions = document.querySelectorAll('.question');

// Loop through each question
questions.forEach(question => {
  // Get the associated answer element
  const answer = question.nextElementSibling;
  const arrow = question.querySelector('.icon');
  answer.style.display = 'none';

  // Add click handler to question
  question.addEventListener('click', () => {
    // Toggle visibility of answer
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.src = 'images/icon-arrow-down.png';

    } else {
      document.querySelectorAll('.answer').forEach(a => {
        a.style.display = 'none';
      });

    document.querySelectorAll('.icon').forEach(arrow => {
          arrow.src = 'images/icon-arrow-down.png'; // Reset all arrows
    });

      answer.style.display = 'block';
      arrow.src = 'images/icon-arrow-up.png';
    }
  });
});

const first = document.querySelector('.a1');
const second = document.querySelector('.a2');
const third = document.querySelector('.a3');
const sections = document.querySelectorAll('.section');

first.addEventListener('click', function() {
  this.classList.add('active-1'); // Voeg de CSS-klasse 'active-1' toe wanneer erop wordt geklikt
  second.classList.remove('active-2'); // Verwijder de CSS-klasse 'active-2' van het tweede element
  third.classList.remove('active-3'); // Verwijder de CSS-klasse 'active-3' van het derde element
});

second.addEventListener('click', function() {
  this.classList.add('active-2'); // Voeg de CSS-klasse 'active-2' toe wanneer erop wordt geklikt
  first.classList.remove('active-1'); // Verwijder de CSS-klasse 'active-1' van het eerste element
  third.classList.remove('active-3'); // Verwijder de CSS-klasse 'active-3' van het derde element
});

third.addEventListener('click', function() {
  this.classList.add('active-3'); // Voeg de CSS-klasse 'active-3' toe wanneer erop wordt geklikt
  first.classList.remove('active-1'); // Verwijder de CSS-klasse 'active-1' van het eerste element
  second.classList.remove('active-2'); // Verwijder de CSS-klasse 'active-2' van het tweede element
});

first.addEventListener('click', function() {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('.section-1').classList.add('active');
});

second.addEventListener('click', function() {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('.section-2').classList.add('active');
});

third.addEventListener('click', function() {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('.section-3').classList.add('active');
});

