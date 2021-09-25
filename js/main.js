'use strict';
class UI {
    constructor(domImg, domCim, domAltCim, domDescription, domPrize) {
        domImg = document.querySelector(".picture");
        domCim = document.querySelector(".name");
        domAltCim = document.querySelector(".altName");
        domDescription = document.querySelector(".description");
        domPrize = document.querySelector(".prize");
        this.kep = domImg;
        this.cim = domCim;
        this.altCim = domAltCim;
        this.description = domDescription;
        this.prize = domPrize;
    }
}
class productDisCacher extends UI {
    constructor(kep, cim, altCim, description, prize) {
        super(kep, cim, altCim, description, prize);
        this.productPicture = "/CodeBerryWebShop/assets/discatcher.jpg";
        this.productName = "DisCatcher Target";
        this.productAltName = "Discgolf";
        this.productDescription = "DisCatcher Target a chain grid that catches fast and slow putts, heavy and light discs like no other target.";
        this.productPrize = "399";
        this.euro = "€"
    }
    feel() {
        this.kep.src = this.productPicture; //Ha képet akarok beilleszteni, akkor a kép tag-ének az "src" attribútumára kell rámutatni.
        this.cim.innerHTML = this.productName;
        this.altCim.innerHTML = this.productAltName;
        this.description.innerHTML = this.productDescription;
        this.prize.innerHTML = this.euro + this.productPrize;
    }
}
const start = new productDisCacher();
start.feel();