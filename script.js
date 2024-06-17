
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var openModalButton = document.getElementById("openModalButton");
  var openModalLink = document.getElementById("openModalLink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listeners to open modal
  openModalButton.onclick = function () {
    openModal();
  };

  openModalLink.onclick = function () {
    openModal();
  };

  // Event listener to close modal
  span.onclick = function () {
    closeModal();
  };

  // Close modal when clicking outside modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };


  