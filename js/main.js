"use strict";
class UI {
  constructor(
    domCartContent,
    domContent,
    domContener,
    domImg,
    domCim,
    domAltCim,
    domDescription,
    domPrize
  ) {
    domCartContent = document.querySelector(".cartContent");
    domContent = document.querySelector("#content");
    domContener = document.querySelectorAll("#contener");
    domImg = document.querySelectorAll(".picture");
    domCim = document.querySelectorAll(".name");
    domAltCim = document.querySelectorAll(".altName");
    domDescription = document.querySelectorAll(".description");
    domPrize = document.querySelectorAll(".prize");
    this.cartContent = domCartContent;
    this.content = domContent;
    this.contener = domContener;
    this.kep = domImg;
    this.cim = domCim;
    this.altCim = domAltCim;
    this.description = domDescription;
    this.prize = domPrize;
  }
}

class productInfo extends UI {
  constructor() {
    super();
    this.productPicture = [
      "/CodeBerryWebShop/assets/discatcher.jpg",
      "/CodeBerryWebShop/assets/dog.jpg",
    ];
    this.productName = ["DisCatcher Target", "Hero SuperAero"];
    this.productAltName = ["Discgolf", "Discgolf"];
    this.productDescription = [
      "DisCatcher Target a chain grid that catches fast and slow putts, heavy and light discs like no other target.",
      "Hero SuperAero is a disc that floats like a butterfly, holds up like a SuperHero",
    ];
    this.productPrize = ["399", "14"];
    this.euro = "€";
  }
  feel() {
    for (let i = 0; i < this.productName.length; i++) {
      this.kep[i].src = this.productPicture[i]; //Ha képet akarok beilleszteni, akkor a kép tag-ének az "src" attribútumára kell rámutatni.
      this.cim[i].innerHTML = this.productName[i];
      this.altCim[i].innerHTML = this.productAltName[i];
      this.description[i].innerHTML = this.productDescription[i];
      this.prize[i].innerHTML = this.euro + this.productPrize[i];
    }
  }
}
class domCreate extends productInfo {
  constructor(
    arrayCount,
    cIdContener,
    cClassImg,
    cIdData,
    cClassName,
    cClassAltName,
    cClassDescription,
    cIdBuy,
    cIdPrize,
    cClassPrize,
    cIdButton,
    cClassButton
  ) {
    super();
    arrayCount = this.productName.length;
    for (let i = 0; i < arrayCount; i++) {
      cIdContener = document.createElement("div");
      cIdContener.setAttribute("id", "contener");
      cClassImg = document.createElement("img");
      cClassImg.setAttribute("class", "picture");
      cIdData = document.createElement("div");
      cIdData.setAttribute("id", "data");
      cClassName = document.createElement("h1");
      cClassName.setAttribute("class", "name");
      cClassAltName = document.createElement("h2");
      cClassAltName.setAttribute("class", "altName");
      cClassDescription = document.createElement("p");
      cClassDescription.setAttribute("class", "description");
      cIdBuy = document.createElement("div");
      cIdBuy.setAttribute("id", "buy");
      cIdPrize = document.createElement("div");
      cIdPrize.setAttribute("id", "prize");
      cClassPrize = document.createElement("h1");
      cClassPrize.setAttribute("class", "prize");
      cIdButton = document.createElement("div");
      cIdButton.setAttribute("id", "button");
      cClassButton = document.createElement("div");
      cClassButton.setAttribute("id", "itemButton");
      cClassButton.setAttribute("class", "button" + " " + "button" + [i]);
      cClassButton.innerHTML = "Add to cart";
      this.content.appendChild(cIdContener);
      cIdContener.appendChild(cClassImg);
      cIdContener.appendChild(cIdData);
      cIdData.appendChild(cClassName);
      cIdData.appendChild(cClassAltName);
      cIdData.appendChild(cClassDescription);
      cIdContener.appendChild(cIdBuy);
      cIdBuy.appendChild(cIdPrize);
      cIdPrize.appendChild(cClassPrize);
      cIdBuy.appendChild(cIdButton);
      cIdButton.appendChild(cClassButton);
    }
  }
  start() {
    this.domDocument = document.body.clientWidth;
    if (this.domDocument < 768) {
      this.cartContent.classList.toggle("cartContentClick");
    }
  }
  listener() {
    this.cartContent.addEventListener("click", () => this.start());
  }
}
new domCreate().listener();
new productInfo().feel();

class Button {
  constructor(itemButton) {
    this.topic = [];
    itemButton = document.querySelectorAll("#itemButton");
    this.button = itemButton;
    console.log(this.button)
  };
  list() {
      this.button.forEach((element) => {
        element.addEventListener("click", () => {
            this.topic.push(element.classList.item(1));
            console.log(this.topic);
        })
      })
    }
  };
new Button().list();