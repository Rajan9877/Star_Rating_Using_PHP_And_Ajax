document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById("stars");
    const selectedRating = document.getElementById("selected-rating");
    const commentInput = document.getElementById("comment");
    const submitButton = document.getElementById("submit-button");
    const maxRating = 5; // Maximum rating (number of stars)

    // Generate stars dynamically
    for (let i = 1; i <= maxRating; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.setAttribute("data-rating", i);
        star.innerHTML = "&#9733;"; // Unicode star character
        starsContainer.appendChild(star);

        // Add click event listeners to stars
        star.addEventListener("click", function() {
            const rating = parseInt(star.getAttribute("data-rating"));
            selectedRating.textContent = rating;

            // Remove active class from all stars
            starsContainer.querySelectorAll(".star").forEach(s => s.classList.remove("active"));

            // Add active class to clicked stars and stars before it
            for (let j = 1; j <= rating; j++) {
                starsContainer.querySelector(`.star[data-rating="${j}"]`).classList.add("active");
            }
        });
    }

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function() {
        const rating = parseInt(selectedRating.textContent);
        const comment = commentInput.value;

        // Send the rating and comment to the server (you'll implement this part)
        sendRatingAndCommentToServer(rating, comment);

        // Clear the comment input and reset the rating to 0
        commentInput.value = "";
        selectedRating.textContent = "0";

        // Remove active class from all stars
        starsContainer.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
    });

    // Function to send rating and comment to the server (you'll implement this)
    function sendRatingAndCommentToServer(rating, comment) {
        // Make an AJAX request to send the data to the server for storage
        // You need to implement this part based on your server setup
        var xhr = new XMLHttpRequest();
        var url = 'reviewstore.php';
        var params = 'rating=' + rating + '&comment=' + comment;
        
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) { // Request completed
                if (xhr.status === 200) { // Successful response
                    var response = xhr.responseText;
                    // console.log(response);
                    document.getElementById("para2").style.display = "block";
                    document.getElementById("para2").innerHTML = response;
                    setTimeout(()=>{
                        document.getElementById("para2").style.display = "none";
                    }, 5000)
                    // Handle success here, e.g., update UI or show a success message
                } else {
                    // Handle error here, e.g., show an error message
                    console.log("Error Occured!");
                }
            }
        };
        
        xhr.send(params);
        
        
    }
});
