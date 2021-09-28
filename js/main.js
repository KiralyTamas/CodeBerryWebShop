'use strict';
class UI {
  constructor(domContener, domImg, domCim, domAltCim, domDescription, domPrize) {
    domContener = document.querySelector("#contener");
    domImg = document.querySelector(".picture");
    domCim = document.querySelector(".name");
    domAltCim = document.querySelector(".altName");
    domDescription = document.querySelector(".description");
    domPrize = document.querySelector(".prize");
    this.contener = domContener;
    this.klone = this.contener.cloneNode(true);
    this.kep = domImg;
    this.cim = domCim;
    this.altCim = domAltCim;
    this.description = domDescription;
    this.prize = domPrize;
  }
}
class productInfo extends UI {
  constructor(klone, kep, cim, altCim, description, prize) {
    super(klone, kep, cim, altCim, description, prize);
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
    document.body.appendChild(this.klone);
  }
}
const start = new productInfo();
start.feel();