class Hangman {
    constructor(word) {
        this.startAgain(word);
    }
    guess(char) {
        if (this.errorCount) {
            if (this.word.indexOf(char.toLowerCase()) === -1) {
                this.errorCount -= 1;
                this.wrongChars.push(char.toLowerCase());
                console.log('wrong letter, errors left ' + this.errorCount + ' | ' + this.wrongChars.join(', '));
            } else {
                for (let i = 0; i < this.word.length; i++) {
                    if (char.toLowerCase() === this.word[i]) {
                        this.visibleWord[i] = this.word[i];
                    }
                }
                if (this.visibleWord.join('') !== this.word) {
                    console.log(this.visibleWord.join(''));
                } else {
                    console.log(this.word + '| You won!');
                }
            }
        } else {
            console.log('You lose!')
        }
        return this;
    }
    getGuessedString() {
        console.log(this.visibleWord);
        return this;
    }
    getErrorsLeft() {
        console.log(this.errorCount);
        return this;
    }
    getWrongSymbols() {
        console.log('[ ' + this.wrongChars.join(', ') + ' ]');
        return this;
    }
    getStatus() {
        console.log(this.visibleWord + ' | ' + 'errors left ' + this.errorCount);
        return this;
    }
    startAgain(word) {
        this.word = word.toLowerCase();
        this.visibleWord = new Array(this.word.length).fill('_');
        this.wrongChars = [];
        this.errorCount = 6;
        return this;
    }
}
module.exports = new Hangman();