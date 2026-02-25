const rootClass = '[data-js-code]';

class CodeBlock {
    stateClasses = {
        isHidden: 'is-hidden',
    };

    elementClasses = {
        launchBtn: '[data-js-code-launch]',
        codeResult: '[data-js-code-result]',
    };

    constructor() {
        this.rootElement = document.querySelector(rootClass);
        this.launchBtnElement = this.rootElement.querySelector(
            this.elementClasses.launchBtn
        );
        this.codeResultElement = this.rootElement.querySelector(
            this.elementClasses.codeResult
        );
        this.bindEvents();
    }

    bindEvents() {
        this.launchBtnElement.addEventListener('click', () =>
            this.launchCode()
        );
    }

    launchCode = () => {
        this.codeResultElement.classList.remove('is-hidden');
    };
}

export default CodeBlock;
