document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image');
    const message = document.querySelector('.message');
    const countdown = document.getElementById('countdown');
    const modal = document.getElementById('modal');
    const nextSiteButton = document.getElementById('next-site');
    
    let timer;
    let seconds = 60;
    let tasksCompleted = 0;
  
    function startTimer() {
      timer = setInterval(function() {
        seconds--;
        countdown.textContent = seconds;
        if (seconds <= 0) {
          clearInterval(timer);
          modal.style.display = "block";
          modal.querySelector('p').textContent = "Time's up!";
        }
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timer);
    }
  
    function showModal(messageText) {
      modal.style.display = "block";
      modal.querySelector('p').textContent = messageText;
    }
  
    function checkImage(event) {
      const selectedImage = event.target;
      const correct = selectedImage.getAttribute('data-correct') === 'true';
      if (correct) {
        selectedImage.classList.add('correct');
        selectedImage.src = "green_tick.png";
        message.textContent = "Correct answer selected";
        tasksCompleted++;
      } else {
        selectedImage.classList.add('incorrect');
        selectedImage.src = "red_cross.png";
        message.textContent = "Incorrect answer selected";
        selectedImage.classList.add('pulse');
      }
  
      setTimeout(function() {
        if (tasksCompleted === 3) {
          showModal("Congratulations! You completed all tasks.");
          stopTimer();
        } else {
          // Change images and text for the next task
          // Reset image styles and message
        }
      }, 5000);
    }
  
    images.forEach(image => {
      image.addEventListener('click', checkImage);
    });
  
    nextSiteButton.addEventListener('click', function() {
      // Redirect to the next site
    });
  
    startTimer();
  });