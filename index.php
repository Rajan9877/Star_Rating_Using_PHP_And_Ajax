<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Rating with Comments</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="rating-container">
        <h2>Give Your Review :</h2>
        <div class="stars" id="stars">
            <!-- Generate stars dynamically using JavaScript -->
        </div>
        <p id="para">Your rating: <span id="selected-rating">0</span></p>
        <textarea id="comment" placeholder="Add a comment"></textarea>
        <button id="submit-button">Submit</button>
    </div>
    <div class="para2container">
        <p id="para2"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
