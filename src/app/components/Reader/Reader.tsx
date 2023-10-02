

type VoiceChoice = SpeechSynthesisVoice | undefined;

export default class Reader {
    utterance;

    constructor(){
        if ('speechSynthesis' in window) {
            this.utterance = new SpeechSynthesisUtterance();
            this.utterance.lang='en-US';
            const customVoice = this.#getVoiceToUse();
            if(customVoice) {
                this.utterance.voice = customVoice;
            }
        } else {
            throw("Sorry, your browser doesn't support text to speech!")
        }
    }

    read(text: string) {
        this.utterance.text = text;
        window.speechSynthesis.speak(this.utterance);
    }

    #getVoiceToUse(voiceName?: string) {
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
