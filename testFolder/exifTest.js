import EXIF from 'exif-js';


    console.log(123, EXIF)
    function exifPic() {
        const pic = document.getElementById('pic');
            EXIF.getData(pic, function() {
                alert(EXIF.pretty(this));
            var make = EXIF.getTag(this, "Make");
            var model = EXIF.getTag(this, "Model");
            console.log(make, model);
        });
    }