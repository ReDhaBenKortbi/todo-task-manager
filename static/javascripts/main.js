document.addEventListener("DOMContentLoaded", () => {
  // Get references to the modal and buttons
  const openModalButton = document.getElementById("openTaskModal");
  const closeModalButton = document.getElementById("closeTaskModal");
  const taskModal = document.getElementById("taskModal");

  //Notification
  const notification = document.getElementById("notification");
  if (notification) {
    setTimeout(() => {
      notification.classList.add("fade-out");
    }, 4000); // Start fading after 4 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000); // Fully remove after 5 seconds
  }

  // Function to open the modal
  function openModal() {
    taskModal.classList.remove("close__modal"); // Remove the class that hides the modal
    taskModal.classList.add("open__modal"); // Add a class to display the modal
    taskModal.style.display = "block"; // Ensure the modal is displayed
  }

  // Function to close the modal
  function closeModal() {
    taskModal.classList.remove("open__modal"); // Remove the class that displays the modal
    taskModal.classList.add("close__modal"); // Add a class to hide the modal
    taskModal.style.display = "none"; // Ensure the modal is hidden
  }

  // Add event listeners for the buttons
  openModalButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);

  // Close the modal when clicking outside it
  window.addEventListener("click", (event) => {
    if (event.target === taskModal) {
      closeModal();
    }
  });
});
