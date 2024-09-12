if ("speechSynthesis" in window) {
  var synthesis = window.speechSynthesis;
} else {
  alert("Your browser does not support speech synthesis.");
}

// Populate the select element with available voices
function populateVoices() {
  var voicesSelect = document.getElementById("voices-select");
  synthesis.onvoiceschanged = function () {
    var voices = synthesis.getVoices();
    voicesSelect.innerHTML = "";
    voices.forEach(function (voice) {
      var option = document.createElement("option");
      option.textContent = voice.name + " (" + voice.lang + ")";
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voicesSelect.appendChild(option);
    });
  };
}

populateVoices(); // Call the function to populate voices when the page loads

function speak() {
  var textToSpeak = document.getElementById("text-to-read").value;
  var selectedVoice = document.getElementById("voices-select").value;
  var voices = synthesis.getVoices();
  var utterance = new SpeechSynthesisUtterance(textToSpeak);

  // Find the selected voice and set it to the utterance
  voices.forEach(function (voice) {
    if (voice.name + " (" + voice.lang + ")" === selectedVoice) {
      utterance.voice = voice;
    }
  });

  synthesis.speak(utterance);
}
