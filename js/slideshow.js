function Slideshow() {
    let self = {};
    let currentImg = 0;
    let img = document.createElement("img");

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

    self.displayCurrentImg = function() {
        document.getElementById("displayBox").innerHTML = null;
        img.src = baseURL + art[currentImg];
        document.getElementById("displayBox").appendChild(img);
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

var slideshow = new Slideshow();

slideshow.displayCurrentImg();
