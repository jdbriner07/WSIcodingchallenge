class ajax {
    constructor() {

    }

    static get(url, success, fail, dataType) {
        dataType = dataType || 'json';

        var httpReq = new XMLHttpRequest();
        httpReq.addEventListener('load', () => {
            console.log(this);
            if (httpReq.readyState  === 4 && httpReq.status === 200) {
                // success(this.responseText);
            } else {
                // fail(this);
            }
        });
        httpReq.open('GET', url, true);
        httpReq.overrideMimeType('application/json;charset=utf-8');
        httpReq.send();
    }

    static post(url, success, fail, dataType) {
        dataType = dataType || 'json';
    }
}