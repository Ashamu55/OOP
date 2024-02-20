class Nigeria {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Egypt {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Madagascar {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Algeria {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Ethiopia {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Tanzania {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Kenya {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Uganda {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Morocco {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Ghana {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Angola {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Cameroon {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Zimbabwe {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
class Senegal {
    constructor(countryName, detail, cap, Rep, imageSrc) {
        this.country = countryName,
            this.Detail = detail,
            this.Capital = cap,
            this.Resource = Rep,
            this.ImageSrc = imageSrc;
    }
}
const clicky = () => {
    let countryName = document.getElementById("countryName").value;
    if (countryName == '') {
        console.log('Please enter a country name');
        disp.innerHTML = 'Please enter a country name'
    } else if (countryName == "Nigeria") {
        let student1 = new Nigeria("Nigeria", "bjkb", "njnijnijn", "giibihb", "Nigeria.jpeg");
        console.log(student1);
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
      <h1>${student1.Detail}</h1>
      <h1>${student1.Capital}</h1>
      <h1>${student1.Resource}</h1>
       </div>
        </div>
      </div>
        `
        document.getElementById("countryImage").src = student1.ImageSrc;
        document.getElementById("countryName").value = ""
    } else if (countryName == "Egypt") {
        let student2 = new Egypt("Egypt", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Egypt.png")
        console.log(student2);
        document.getElementById("countryImage").src = student2.ImageSrc;
        document.getElementById("countryName").value = ""
    } else if (countryName == "Madagascar") {
        let student3 = new Madagascar("Madagascar", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Madagascar.jpg")
        console.log(student3);
        document.getElementById("countryImage").src = student3.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Algeria") {
        let student4 = new Algeria("Algeria", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Algeria.webp")
        console.log(student4);
        document.getElementById("countryImage").src = student4.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Ethiopia") {
        let student5 = new Ethiopia("Ethiopia", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Ethiopia.avif")
        console.log(student5);
        document.getElementById("countryImage").src = student5.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Tanzania") {
        let student6 = new Tanzania("Tanzania", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Tanzania.jpg")
        console.log(student6);
        document.getElementById("countryImage").src = student6.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Kenya") {
        let student7 = new Kenya("Kenya", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Kenya.webp")
        console.log(student7);
        document.getElementById("countryImage").src = student7.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Uganda") {
        let student8 = new Uganda("Uganda", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Uganda.jpg")
        console.log(student8);
        document.getElementById("countryImage").src = student8.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Morocco") {
        let student9 = new Algeria("Algeria", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Morocco.jpg")
        console.log(student9);
        document.getElementById("countryImage").src = student9.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Zimbabwe") {
        let student10 = new Zimbabwe("Zimbabwe", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Zimbabwe.avif")
        console.log(student10);
        document.getElementById("countryImage").src = student10.ImageSrc;
        document.getElementById("countryName").value = ""
    }
    else if (countryName == "Senegal") {
        let student11 = new Senegal("Senegal", "hgyhiuhiuhi", "uhuhiuhihouho", "iuhuohohuoh", "Senegal.jpg")
        console.log(student11);
        document.getElementById("countryImage").src = student11.ImageSrc;
        document.getElementById("countryName").value = ""
    } else {
        console.log('Country not found');
        // Reset the image source and input field
        document.getElementById("countryImage").src = "";
        document.getElementById("countryName").value = "";
    }
}
