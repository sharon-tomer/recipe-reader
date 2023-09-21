

type VoiceChoice = SpeechSynthesisVoice | undefined;

export default function Reader(props: {text: string}) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.lang='en-US';
        utterance.text = props.text;
        const customVoice = getVoiceToUse();
        if(customVoice) {
            utterance.voice = customVoice;
        }
        window.speechSynthesis.speak(utterance);
    } else {
        // Speech Synthesis Not Supported 😣
         alert("Sorry, your browser doesn't support text to speech!");
    }
    function getVoiceToUse(voiceName?: string) {
        let choice: VoiceChoice = undefined;
        const voiceCandidates = [
            'Google US English',
            'Microsoft David - English (United States)',
            'Microsoft Mark - English (United States)',
            'Microsoft Zira - English (United States)',
            'Google UK English Female',
            'Google UK English Male',
        ];

        const voices = window.speechSynthesis.getVoices();


        if(voiceName) {
            voiceCandidates.unshift(voiceName);
        }
        voiceCandidates.forEach(voiceCandidate => {
            choice = voices.find(currentVoice => currentVoice.name === voiceCandidate)
            if(choice) return choice;
        });
        return choice;
    }
}
