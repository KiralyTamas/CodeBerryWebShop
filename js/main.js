'use strict';
class domCreate {
    constructor(cIdContener, cClassImg,cIdData, cClassName, cClassAltName, cClassDescription, cIdBuy, cIdPrize, cClassPrize, cIdButton, cClassButton) {
        cIdContener = document.createElement("div");
        cIdContener.setAttribute("id", "contener");
        cClassImg = document.createElement("img");
        cClassImg.setAttribute("class", "picture");
        cIdData = document.createElement("div");
        cIdData.setAttribute("id", "data");
        cClassName=document.createElement("h1");
        cClassName.setAttribute("class","name");
        cClassAltName=document.createElement("h2");
        cClassAltName.setAttribute("class","altName");
        cClassDescription=document.createElement("p");
        cClassDescription.setAttribute("class","description");
        document.body.appendChild(cIdContener);
        cIdContener.appendChild(cClassImg);
        cIdContener.appendChild(cIdData);
        cIdData.appendChild(cClassName);
        cIdData.appendChild(cClassAltName);
        cIdData.appendChild(cClassDescription);
    }
}
const start2 = new domCreate();
class UI {
    constructor(domContener, domImg, domCim, domAltCim, domDescription, domPrize) {
        domContener = document.querySelector("#contener");
        domImg = document.querySelector(".picture");
        domCim = document.querySelector(".name");
        domAltCim = document.querySelector(".altName");
        domDescription = document.querySelector(".description");
        domPrize = document.querySelector(".prize");
        this.contener = domContener;
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
        this.productName = ["DisCatcher Target","Hero SuperAero"];
        this.productAltName = ["Discgolf","Discgolf"];
        this.productDescription = ["DisCatcher Target a chain grid that catches fast and slow putts, heavy and light discs like no other target.","a disc that floats like a butterfly, holds up like a SuperHero"];
        this.productPrize = ["399","14"];
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

const start = new productInfo();
start.feel();