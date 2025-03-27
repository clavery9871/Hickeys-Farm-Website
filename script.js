document.addEventListener('DOMContentLoaded', function() {
    // Get all the dropdown buttons
    var dropdownButtons = document.querySelectorAll('.dropbtn');
  
    // Attach a click event listener to each dropdown button
    dropdownButtons.forEach(function(button) {
      button.onclick = function() {
        // This toggles the dropdown for the clicked button
        this.nextElementSibling.classList.toggle("show");
      }
    });
  
    // Close the dropdowns if the user clicks outside of them
    // window.onclick = function(event) {
    //   if (!event.target.matches('.dropbtn')) {
    //     var dropdownContents = document.querySelectorAll(".dropdown-content");
    //     dropdownContents.forEach(function(content) {
    //       if (content.classList.contains('show')) {
    //         content.classList.remove('show');
    //       }
    //     });
    //   }
    // }
  });
  
document.querySelectorAll('.table-header').forEach(header => {
  header.addEventListener('click', () => {
    let contentRows = header.nextElementSibling.querySelectorAll('.table-content');
      contentRows.forEach(row => {
      row.style.display = row.style.display === 'table-row' ? 'none' : 'table-row';
    });
  });
});

//Typewriter Animation
// document.addEventListener("DOMContentLoaded", function() {
//     const text = "Data Engineer, Web Developer, Freelance Artist";
//     const typewriterElement = document.getElementById("professions");
//     let index = 0;
//     const speed = 75; // Adjust typing speed here (milliseconds): lower = fastest

//     function typeWriter() {
//         if (index < text.length) {
//             typewriterElement.textContent += text.charAt(index);
//             index++;
//             setTimeout(typeWriter, speed);
//         }
//     }

//     typeWriter();
// });
