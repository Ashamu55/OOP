class Nigeria {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Egypt {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Madagascar {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Algeria {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Ethiopia {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Tanzania {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Kenya {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Uganda {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Morocco {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Ghana {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Zimbabwe {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Senegal {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Mali {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Togo {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Cameroon {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Angola {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Congo {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}

class Niger {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Money = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}


const clicky = () => {
    let countryName = document.getElementById("countryName").value;
    if (countryName == '') {
        console.log('Please enter a country name');
        show.innerHTML = 'PLEASE ENTER A COUNTRY NAME'
        setTimeout(() => {
            show.innerHTML = ''
        }, 3000);
    } else if (countryName == "Nigeria") {
        let student1 = new Nigeria("Nigeria", "Naira", "Abuja", "natural gas, tin, iron-ore, cola, limestone and arable-land ", "Nigeria.jpeg");
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student1.ImageSrc}"  alt="${student1.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student1.Money}</h3>
            <h3>Capital: ${student1.Capital}</h3>
            <h3>Resource: ${student1.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student1.ImageSrc;
        document.getElementById("countryName").value = ""

    } else if (countryName == "Egypt") {
        let student2 = new Egypt("Egypt", "Egypt-pound", "Cairo", "petroleum, natural-gas, phosphates and iron-ore", "Egypt.png")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student2.ImageSrc}"  alt="${student2.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student2.Money}</h3>
            <h3>Capital: ${student2.Capital}</h3>
            <h3>Resource: ${student2.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student2.ImageSrc;
        document.getElementById("countryName").value = ""

    } else if (countryName == "Madagascar") {
        let student3 = new Madagascar("Madagascar", "Ariary", "Antananarivo", "graphite, chromite, coal, semiprecious, fish and hydropower", "Madagascar.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student3.ImageSrc}"  alt="${student3.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student3.Money}</h3>
            <h3>Capital: ${student3.Capital}</h3>
            <h3>Resource: ${student3.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student3.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Algeria") {
        let student4 = new Algeria("Algeria", "dinar", "Algiers", "iron-ore, phosphates, uranium and lead", "Algeria.webp")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student4.ImageSrc}"  alt="${student4.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student4.Money}</h3>
            <h3>Capital: ${student4.Capital}</h3>
            <h3>Resource: ${student4.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student4.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Ethiopia") {
        let student5 = new Ethiopia("Ethiopia", "birr", "Addis Ababa", "Gold, platinum, copper, potash and natural gas", "Ethiopia.avif")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student5.ImageSrc}"  alt="${student5.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student5.Money}</h3>
            <h3>Capital: ${student5.Capital}</h3>
            <h3>Resource: ${student5.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student5.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Tanzania") {
        let student6 = new Tanzania("Tanzania", "Shilling", "Dodoma", "Gold, Diamond, iron, coal, nickel and natural gas", "Tanzania.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student6.ImageSrc}"  alt="${student6.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student6.Money}</h3>
            <h3>Capital: ${student6.Capital}</h3>
            <h3>Resource: ${student6.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student6.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Kenya") {
        let student7 = new Kenya("Kenya", "Shilling", "Nairobi", "Gold, iron, steel, and gemstones", "Kenya.webp")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student7.ImageSrc}"  alt="${student7.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student7.Money}</h3>
            <h3>Capital: ${student7.Capital}</h3>
            <h3>Resource: ${student7.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student7.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Uganda") {
        let student8 = new Uganda("Uganda", "Shilling", "Kampala", "copper, cobait, salt, gold, and limestone", "Uganda.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student8.ImageSrc}"  alt="${student8.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student8.Money}</h3>
            <h3>Capital: ${student8.Capital}</h3>
            <h3>Resource: ${student8.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student8.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Morocco") {
        let student9 = new Morocco("Morocco", "Dirham", "Rabat", "barite, clays, silver, salt and zinc", "Morocco.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student9.ImageSrc}"  alt="${student9.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student9.Money}</h3>
            <h3>Capital: ${student9.Capital}</h3>
            <h3>Resource: ${student9.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student9.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Zimbabwe") {
        let student10 = new Zimbabwe("Zimbabwe", "Zimbabwean Dollar", "Harare", "coal, copper, iron-ore, tin and platinum group metals", "Zimbabwe.avif")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student10.ImageSrc}"  alt="${student10.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student10.Money}</h3>
            <h3>Capital: ${student10.Capital}</h3>
            <h3>Resource: ${student10.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student10.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Senegal") {
        let student11 = new Senegal("Senegal", "CFA franc", "Dakar", "Fish, Peanuts, phosphate and Gold", "Senegal.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student11.ImageSrc}"  alt="${student11.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student11.Money}</h3>
            <h3>Capital: ${student11.Capital}</h3>
            <h3>Resource: ${student11.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student11.ImageSrc;
        document.getElementById("countryName").value = ""
    } 

    else if (countryName == "Mali") {
        let student12 = new Mali("Mali", "CFA franc", "Bamako", "salt, marble and kaolin", "Mali.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student12.ImageSrc}"  alt="${student12.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student12.Money}</h3>
            <h3>Capital: ${student12.Capital}</h3>
            <h3>Resource: ${student12.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student12.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Togo") {
        let student13 = new Togo("Togo", "CFA franc", "Lome", "Gold, uranium, chromite and Diamonds", "togo.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student13.ImageSrc}"  alt="${student13.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student13.Money}</h3>
            <h3>Capital: ${student13.Capital}</h3>
            <h3>Resource: ${student13.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student13.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Cameroon") {
        let student14 = new Cameroon("Cameroon", "CFA franc", "Yaounde", "bauxite, rubies, diamond and Gold", "Cameroon.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student14.ImageSrc}"  alt="${student14.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student14.Money}</h3>
            <h3>Capital: ${student14.Capital}</h3>
            <h3>Resource: ${student14.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student14.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Angola") {
        let student15 = new Angola("Angola", "Kwanza", "Luanda", "Gold, Diamond, granite and petroleum", "Angola.jpg")
        document.getElementById("disp").innerHTML = `
        <div class="e-card playing">
        <div class="image"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
            <div class="infotop">
            <img  src="${student15.ImageSrc}"  alt="${student15.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student15.Money}</h3>
            <h3>Capital: ${student15.Capital}</h3>
            <h3>Resource: ${student15.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student15.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == "Congo") {
        let student16 = new Congo("Congo", "Congolese Franc", "Kinshasa", "cobali, significant arable land and copper", "Congo.jpg")
        document.getElementById("disp").innerHTML = `
            <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">
            <img  src="${student16.ImageSrc}"  alt="${student16.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student16.Money}</h3>
            <h3>Capital: ${student16.Capital}</h3>
            <h3>Resource: ${student16.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student16.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else if (countryName == " Niger") {
        let student17 = new  Niger(" Niger", "CFA Franc", "Niamey", "Gold, coal, petrolum, salt and gypsum", " Niger.jpg")
        document.getElementById("disp").innerHTML = `
            <div class="e-card playing">
            <div class="image"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="infotop">
            <img  src="${student17.ImageSrc}"  alt="${student17.country}" id="countryImage">
            <br>      
            <h1>${countryName}</h1>
            <div class="name">
            <h3>Money: ${student17.Money}</h3>
            <h3>Capital: ${student17.Capital}</h3>
            <h3>Resource: ${student17.Resource}</h3>
        </div>
        </div>
        </div>
        `
        document.getElementById("countryImage").src = student17.ImageSrc;
        document.getElementById("countryName").value = ""
    }

    else {
        console.log('Country not found');
        show.innerHTML = "COUNTRY NOT FOUND"
        
        setTimeout(() => {
            show.innerHTML = ""
        }, 3000);
        // Reset the image source and input field
        document.getElementById("countryImage").src = "";
        document.getElementById("countryName").value = "";
    }
}
