const allColorBars = document.getElementsByClassName("color-bar-container");
const allPercentTextTags = document.getElementsByClassName("percent-text");

const finishButton = document.getElementById("finish-button");

finishButton.addEventListener("click", function() {
    for(i=0; i<allColorBars.length; i++) {
        allColorBars[i].style.width = "100%";
        allPercentTextTags[i].innerHTML = "100%";
        allPercentTextTags[i].style.left = "90%";
    }
});
