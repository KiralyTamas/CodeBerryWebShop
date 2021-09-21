'use strict';
class UI {
  constructor(domImg, domCim, domAltCim, domDescription, domPrize) {
    domImg = document.getElementsByName("img").src;
    domCim = document.querySelector(".name");
    domAltCim = document.getElementsByClassName("altName");
    domDescription = document.getElementsByClassName("description");
    domPrize = document.getElementsByClassName("prize");
    this.kep = domImg;
    this.cim = domCim;
    this.altCim = domAltCim;
    this.description = domDescription;
    this.prize = domPrize;
  }
}
class productInfo extends UI {
  constructor(cim, productName) {
    super(cim);
    this.productPicture = "/CodeBerryWebShop/assets/discatcher.jpg";
    productName = "DisCatcher Target";
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