const videos = {
    Math: [
      "Zrv1EDIqHkY", // Math video 1
      "HeQX2HjkcNo", // Math video 2
      "lFlu60qs7_4", // Math video 3
      "094y1Z2wpJg", // Math video 4
      "OxGsU8oIWjY"  // Math video 5
    ],
    Science: [
      "fDek6cYijxI", // Science video 1
      "wwSzpaTHyS8", // Science video 2
      "q4DF3j4saCE", // Science video 3
      "isdLel273rQ", // Science video 4
      "fu3645D4ZlI"  // Science video 5
    ],
    History: [
      "rdneevYAwfc", // History video 1
      "Mnws0xna2To", // History video 2
      "Xzv84ZdtlE0", // History video 3
      "f9c4Y7Vf7G0", // History video 4
      "CskfvgEItPA"  // History video 5
    ]
};

let currentSubject = null;
let currentVideoIndex = 0;

function loadVideos(subject) {
    currentSubject = subject;
    currentVideoIndex = 0;
    document.getElementById("subject-title").innerText = subject + " Videos";
    document.getElementById("video-player").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[subject][0]}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById("next-button").style.display = "block";
}

function loadNextVideo() {
    if (currentSubject && currentVideoIndex < videos[currentSubject].length - 1) {
        currentVideoIndex++;
        document.getElementById("video-player").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[currentSubject][currentVideoIndex]}" frameborder="0" allowfullscreen></iframe>`;
    }
}

function loadNextVideo() {
    if (currentSubject && currentVideoIndex < videos[currentSubject].length - 1) {
        currentVideoIndex++;
        document.getElementById("video-player").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videos[currentSubject][currentVideoIndex]}" frameborder="0" allowfullscreen></iframe>`;
    }

    // Check if it's the last video of the subject
    if (currentVideoIndex === videos[currentSubject].length - 1) {
        // Hide the next button
        document.getElementById("next-button").style.display = "none";
    } else {
        // Show the next button
        document.getElementById("next-button").style.display = "block";
    }
}
