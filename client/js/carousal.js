class Carousal {
    constructor() {
        this.carousal = document.getElementById('carousal');
        this.carousalContainer = document.getElementById('carousal-container');
        this.imagesArr = [];
        this.messagesArr = [];
        this.currentIndex = 0;
    }

    close() {
        this.carousalContainer.classList.add('no-display');
    }

    open() {
        this.carousalContainer.classList.remove('no-display');
    }

    set images(arrOfImages) {
        if (typeof arrOfImages !== 'object' || typeof arrOfImages[0].href !== 'string') {
            console.error('Type error assiging Carsousal.images');
            return 'type error';
        } else {
            this.imagesArr = arrOfImages;
            return '0';
        }
    }

    set messages(arrOfMessages) {
        if (typeof arrOfMessages !== 'object' || typeof arrOfMessages[0] !== 'string') {
            console.error('Type error assiging Carsousal.messages');
            return 'type error';
        } else {
            this.messagesArr = arrOfMessages;
            return '0';
        }
    }

    redraw() {
        let messagesHTML = '';
        for (let i = 0; i < this.messagesArr.length; i++) {
            messagesHTML += [
                '<div class="carousal-message">',
                    this.messagesArr[i],
                '</div>'
            ].join('');
        }
        let imagesHTML = '';
        let positionHTML = '';
        for (let i = 0; i < this.imagesArr.length; i++) {
            imagesHTML += [
                '<div class="carousal-image" style="left:' + (i * 100) + '%;">',
                    '<image class="product-image" src="' + this.imagesArr[i].href + '">',
                '</div>'
            ].join('');

            positionHTML += [
                '<div class="position-indicator ' + ( i=== 0 ? 'current-position' : '') + '">',
                '</div>'
            ].join('')
        }

        this.currentIndex = 0;
        this.carousal.children[0].innerHTML = messagesHTML;
        this.carousal.children[1].innerHTML = imagesHTML;
        this.carousal.children[1].className = 'item-0';
        this.carousal.children[3].innerHTML = positionHTML;
    }

    moveLeft() {
        if (this.currentIndex <= 0) {
            return;
        } else {
            this.carousal.children[1].classList.remove('item-' + this.currentIndex);
            this.carousal.children[3].children[this.currentIndex].classList.remove('current-position')
            this.currentIndex--;
            this.carousal.children[1].classList.add('item-' + this.currentIndex);            
            this.carousal.children[3].children[this.currentIndex].classList.add('current-position')
        }
    }

    moveRight() {
        if (this.currentIndex >= this.imagesArr.length - 1) {
            return;
        } else {
            this.carousal.children[1].classList.remove('item-' + this.currentIndex);
            this.carousal.children[3].children[this.currentIndex].classList.remove('current-position')
            this.currentIndex++;
            this.carousal.children[1].classList.add('item-' + this.currentIndex);            
            this.carousal.children[3].children[this.currentIndex].classList.add('current-position')
        }
    }
}

const carousal = new Carousal();

document.getElementById('carousal-x').onclick = carousal.close.bind(carousal);
document.getElementById('left-carousal-arrow').onclick = carousal.moveLeft.bind(carousal);
document.getElementById('right-carousal-arrow').onclick = carousal.moveRight.bind(carousal);