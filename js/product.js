class Product {
    constructor(product) {
        this.product = product;
    }

    assembleHTML() {
        var result = [
            '<div class="product" id="' + this.product.id + '">',
                '<div class="product-name">',
                    this.product.name,
                '</div>',
                '<image class="product-image" src="' + this.product.hero.href + '">',
                '<div class="product-price">',
                    '$' + this.product.priceRange.selling.high + ' - $' + this.product.priceRange.selling.low,
                '</div>',
            '</div>'
        ];

        return result.join('');
    }

    popupCarousal() {
        console.log(this);
        carousal.messages = this.product.messages;
        carousal.images = this.product.images;
        carousal.redraw();
        carousal.open();
    }
}