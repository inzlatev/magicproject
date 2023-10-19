document.addEventListener('DOMContentLoaded', function() {
    const speakButton = document.getElementById('speak-button');
    const textToSpeak = document.getElementById('text-to-speak');

    speakButton.addEventListener('click', function() {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
            utterance.lang = 'ru-RU';
            speechSynthesis.speak(utterance);
        } else {
            alert('К сожалению, ваш браузер не поддерживает синтез речи.');
        }
    });
});