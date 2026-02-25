import CodeBlock from './CodeBlock.js';

const rootClass = '[data-js-cake]';

class Cake {
    elementClasses = {
        congrats: '[data-js-congrats]',
        candle: '[data-js-candle]',
    };

    stateClasses = {
        isBlowed: 'is-blowed',
        isHidden: 'is-hidden',
    };

    constructor() {
        this.rootElement = document.querySelector(rootClass);
        this.cakeElement = document.querySelector('.cake');
        this.congratsElement = this.rootElement.querySelector(
            this.elementClasses.congrats
        );
        this.candleElements = this.rootElement.querySelectorAll(
            this.elementClasses.candle
        );
        const initialState = {
            candleCount: this.candleElements.length,
        };
        this.candleState = new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop];
            },
            set: (target, prop, newProp) => {
                if (newProp <= 0) {
                    this.setCongrats();
                    new CodeBlock();
                    // setTimeout(() => {
                    // }, 1000)
                    return true;
                }
                target[prop] = newProp;
                return true;
            },
        });
        this.bindEvents();
    }

    bindEvents() {
        this.candleElements.forEach((candleElement) => {
            candleElement.addEventListener('click', (e) => {
                this.updateUI(e.target);
            });
        });
    }

    updateUI(candleElem) {
        candleElem.classList.add('is-blowed');
        this.candleState.candleCount--;
    }

    setCongrats() {
        this.cakeElement.classList.add('all-blowed');
        this.congratsElement.classList.remove('is-hidden');
    }
}

export default Cake;
