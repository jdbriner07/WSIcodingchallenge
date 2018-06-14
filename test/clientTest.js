describe('products.js', () => {
	it('should have the products loaded', () => {
        let testProducts = products.products;
        expect(testProducts).to.be.a('array');
		expect(testProducts).to.equal(data.groups);
	})

    it('should assemble the HTML for the products list',  () => {
        let testHTML = products.assembleProducts();
        expect(testHTML).to.be.a('string');
        expect(testHTML.substring(0, 4)).to.equal('<div');
    })

    it('should render the products list and assign click events', () => {
        expect(document.getElementById('products-container').innerHTML).to.equal(products.assembleProducts());
        expect(document.getElementById(products.products[0].id).onclick).to.be.a('function');
    })
})

describe('product.js', () => {
	it('should create a string of the HTML for the product', () => {
        let testProduct = products.listProducts[0].assembleHTML();
        expect(testProduct).to.be.a('string');
		expect(testProduct.substring(0, 4)).to.equal('<div');
    })
    
    it('should open the carousal', () => {
        products.listProducts[0].popupCarousal();
		expect(carousal.images).to.be.a('array');
		expect(carousal.images[0].href).to.be.a('string');
		expect(carousal.messages).to.be.a('array');
        expect(carousal.messages[0]).to.be.a('string');
        expect(document.getElementById('carousal-container').classList.contains('no-display')).to.equal(false);
	})
})

describe('carousal.js', () => {
    it('should move the carousal right', () => {
        let imageDiv = document.getElementById('carousal').children[1];
        expect(imageDiv.className).to.equal('item-0');
        carousal.moveRight();
        expect(imageDiv.className).to.equal('item-1');
        carousal.moveRight();
        expect(imageDiv.className).to.equal('item-2');
        carousal.moveRight();
        expect(imageDiv.className).to.equal('item-2');
    })
    
    it('should move the carousal left', () => {
        let imageDiv = document.getElementById('carousal').children[1];
        expect(imageDiv.className).to.equal('item-2');
        carousal.moveLeft();
        expect(imageDiv.className).to.equal('item-1');
        carousal.moveLeft();
        expect(imageDiv.className).to.equal('item-0');
        carousal.moveLeft();
        expect(imageDiv.className).to.equal('item-0');
        carousal.moveLeft();        
    })

    it('should redraw and reset the carousal', () => {
        let imageDiv = document.getElementById('carousal').children[1];
        expect(imageDiv.children.length).to.equal(3);
        products.listProducts[1].popupCarousal();
        expect(imageDiv.className).to.equal('item-0');
        expect(imageDiv.children.length).to.equal(2);
    })
})
