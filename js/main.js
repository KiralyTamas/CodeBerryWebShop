'use strict';
class UI {
  constructor(domImg, domCim, domAltCim, domDescription, domPrize) {
    domImg = document.querySelector(".img");
    domCim = document.querySelector(".name");
    domAltCim = document.querySelector("altName");
    domDescription = document.querySelector("description");
    domPrize = document.querySelector("prize");
    this.kep = domImg;
    this.cim = domCim;
    this.altCim = domAltCim;
    this.description = domDescription;
    this.prize = domPrize;
  }
}
class productInfo extends UI {
  constructor(cim) {
    super(cim);
    this.productPicture = "/CodeBerryWebShop/assets/discatcher.jpg";
    this.productName = "DisCatcher Target";
    this.productAltName = "Discgolf";
    this.productDescription = "DisCatcher Target a chain grid that catches fast and slow putts, heavy and light discs like no other target.";
    this.productPrize = "399";
    this.euro = "€"
  }
  feel() {
    this.cim.innerHTML = this.productName;

  }
}
const start = new productInfo();
start.feel();