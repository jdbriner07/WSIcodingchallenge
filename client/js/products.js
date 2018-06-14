class Products {
    constructor() {
        this.DOMelement = document.getElementById('products-container');
        this.productsJSON = data.groups;
        this.productList = [];
    }

    assign(HTMLstring) {
        this.DOMelement.innerHTML = HTMLstring;
        for (let i = 0; i < this.productList.length; i++) {
            document.getElementById(this.productList[i].product.id).onclick = this.productList[i].popupCarousal.bind(this.productList[i]);
        }
    }

    assembleProducts() {
        var resultHTML = '';
        for (let i = 0; i < this.productsJSON.length; i++) {
            let product = new Product(this.productsJSON[i]);
            resultHTML += product.assembleHTML();
            this.productList.push(product);
        }

        return resultHTML;
    }

    get products() {
        return this.productsJSON;
    }
    get listProducts() {
        return this.productList;
    }
}

const products = new Products();

products.assign(products.assembleProducts());
