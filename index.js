// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

function updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
        var wordCount = text.trim() ? text.trim().split(" ").length : 0;
        document.getElementById("wordCount").innerHTML = wordCount;
}
