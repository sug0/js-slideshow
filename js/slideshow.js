function SlideShow() {
    let self = {};
    let currentImg = 0;
    let img = document.createElement("img");
    let ld = document.createElement("img");
    let rel = window.location.pathname;
    let fst = true;

    /*
     * For your personal use, configure both 'baseURL' and 'art'
     * */
    let baseURL = "https://gandas.us.to/files/art/drawings/";
    let art = [
        "20141222_00001_001.jpg", "20141222_00002_001.jpg", "20141222_00003_001.jpg",
        "20141222_00004_001.jpg", "20141228_00002_001.jpg", "20150122_00001_002.jpg",
        "20150227_00001_001.jpg", "20150324_00001_001.jpg", "20151005_00001_001.jpg",
        "20151005_00002_001.jpg", "20160624_00001_001.jpg"
    ];

    img.onload = function() {
        document.getElementById("output").innerHTML = null;
    }

    ld.src = "res/loading.gif"

    self.displayCurrentImg = function() {
        if (fst) {
            var regex = /[?&]([^=#]+)=([^&#]*)/g;
            var match;

            while ((match = regex.exec(window.location.href))) {
                if (match[1] === "img")
                    break;
            }

            if (match) {
                if (isNaN((currentImg = parseInt(match[2]))))
                    currentImg = 0;
                else
                    currentImg = Math.abs(match[2]) % art.length;

                console.log("jumping to image " + currentImg);
            }

            fst = false;
        }

        document.getElementById("output").appendChild(ld);
        document.getElementById("displayBox").innerHTML = null;
        img.src = baseURL + art[currentImg];
        document.getElementById("displayBox").appendChild(img);
        window.history.replaceState(null, null, rel + "?img=" + currentImg);
    }

    self.buttonPrevious = function() {
        if (currentImg == 0)
            currentImg = art.length - 1;
        else
            currentImg--;
        self.displayCurrentImg();
    }

    self.buttonNext = function() {
        if (currentImg == art.length - 1)
            currentImg = 0;
        else
            currentImg++;
        self.displayCurrentImg();
    }

    return self;
}

var slideshow = new SlideShow();
slideshow.displayCurrentImg();

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: // left
            slideshow.buttonPrevious();
            break;
        case 39: // right
            slideshow.buttonNext();
            break;
    }
}
