//your code here
unction updateWordCount() {
    var text = document.getElementById("evaluatedText").value;
        var wordCount = text.trim() ? text.trim().split(" ").length : 0;
        document.getElementById("wordCount").innerHTML = wordCount;
}
