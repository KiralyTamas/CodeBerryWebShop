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
        cIdBuy=document.createElement("div");
        cIdBuy.setAttribute("id","buy");
        cIdPrize=document.createElement("div");
        cIdPrize.setAttribute("id","prize");
        cClassPrize=document.createElement("h1");
        cClassPrize.setAttribute("class","prize");
        cIdButton=document.createElement("div");
        cIdButton.setAttribute("id","button");
        cClassButton=document.createElement("div");
        cClassButton.setAttribute("class","button");
        cClassButton.innerHTML="Add to cart";
        document.body.appendChild(cIdContener);
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
const start2 = new domCreate();
class UI {
    constructor(domContener, domImg, domCim, domAltCim, domDescription, domPrize) {
        domContener = document.querySelectorAll("#contener");
        domImg = document.querySelectorAll(".picture");
        domCim = document.querySelectorAll(".name");
        domAltCim = document.querySelectorAll(".altName");
        domDescription = document.querySelectorAll(".description");
        domPrize = document.querySelectorAll(".prize");
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
        this.productPicture = ["/CodeBerryWebShop/assets/discatcher.jpg","/CodeBerryWebShop/assets/dog.jpg"];
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