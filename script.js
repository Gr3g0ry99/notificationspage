const notifications = document.querySelectorAll('.notification');
const markReadButton = document.querySelector('.mark-read');

// Function to toggle the 'active' class for individual notification elements
function toggleActiveClass(notification) {
  notification.classList.toggle('active');
}

// Function to set the 'active' class for all notification elements to the specified value
function setAllActiveStatus(value) {
  notifications.forEach(notification => {
    if (value) {
      notification.classList.add('active');
    } else {
      notification.classList.remove('active');
    }
  });
}

// Function to toggle the text of the 'Mark as read' button
function toggleMarkReadButtonText() {
  if (markReadButton.textContent === 'Mark all as read') {
    markReadButton.textContent = 'Mark all as unread';
  } else {
    markReadButton.textContent = 'Mark all as read';
  }
}

// Add click event listener to each notification element
notifications.forEach(notification => {
  notification.addEventListener('click', function() {
    toggleActiveClass(notification);
  });
});

// Add click event listener to 'Mark as read' button
markReadButton.addEventListener('click', function() {
  if (markReadButton.textContent === 'Mark all as read') {
    setAllActiveStatus(false);
    toggleMarkReadButtonText();
  } else {
    setAllActiveStatus(true);
    toggleMarkReadButtonText();
  }
});