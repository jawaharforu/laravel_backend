$(document).ready(function(){
    /*
    $('#photo').change(function(e){
        //var fileName = e.target.files[0].name;
        var file = e.target.files[0];
        fr = new FileReader();
        //fr.readAsText(file);
        console.log(fr.readAsDataURL(file));
    });
    */
   var Upload = function (file) {
    this.file = file;
};

Upload.prototype.getType = function() {
    return this.file.type;
};
Upload.prototype.getSize = function() {
    return this.file.size;
};
Upload.prototype.getName = function() {
    return this.file.name;
};
Upload.prototype.doUpload = function () {
    var that = this;
    var formData = new FormData();

    // add assoc key values, this will be posts values
    formData.append("file", this.file, this.getName());

    $.ajax({
        type: "POST",
        url: "/api/file_convert",
        xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload) {

            }
            return myXhr;
        },
        success: function (data) {
            // your callback here
            console.log(data);
            $('#textarea_description').summernote('insertText', data);
        },
        error: function (error) {
            // handle error
        },
        async: true,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        timeout: 60000
    });
};

$("#filename").on("change", function (e) {
    var file = $(this)[0].files[0];
    var upload = new Upload(file);
    upload.doUpload();
});
});
