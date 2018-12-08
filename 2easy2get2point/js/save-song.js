// document.addEventListener('DOMContentLoaded', function () {
//     var songForm = document.forms['song-form'];
//     if (songForm == null || songForm['btn-submit'] == null) {
//         alert('Vui lòng thử lại!');
//         return;
//     }
//     songForm['btn-submit'].onclick = function () {
//         var txtName = songForm['name'];
//         var txtDescription = songForm['description'];
//         var txtSinger = songForm['singer'];
//         var txtAuthor = songForm['author'];
//         var txtThumbnail = songForm['thumbnail'];
//         var txtLink = songForm['link'];
//         if (txtName == null
//             || txtDescription == null
//             || txtSinger == null
//             || txtAuthor == null
//             || txtThumbnail == null
//             || txtLink == null) {
//             alert('Vui lòng thử lại!');
//             return;
//         }
//
//         var jsSong = {
//             name: txtName.value,
//             description: txtDescription.value,
//             singer: txtSinger.value,
//             author: txtAuthor.value,
//             thumbnail: txtThumbnail.value,
//             link: txtLink.value
//         }
//         createSong(jsSong);
//     }
// });
//
// function createSong(jsSong) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var song = JSON.parse(this.responseText);
//             alert(`Lưu thành công bài hát ${song.name}`);
//         } else if (this.readyState == 4 && (this.status == 401 || this.status == 403)) {
//             alert('This action required logged in to continue!')
//             window.location.href = "login.html";
//         }
//     }
//     xhr.open('POST', CREATE_SONG_API, true);
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
//     xhr.send(JSON.stringify(jsSong));
// }
//
//
//
var varlidate = $('#song-form').validate({
        rules: {
            name: {
                required: true,
            },
            singer: {
                required: true
            },
            description: {
                required: true,
            },
            author: {
                required: true,
            },
            thumbnail: {
                required: true,
            },
            link: {
                required: true,
            },
        },
        messages: {
            name: {
                required: 'vui long nhap ten bai hat',
            },
            singer: {
                required: 'vui long nhap ten ca si',
            },
            description:{
                required: 'vui long nhap mo ta',
            },
            author: {
                required:'vui long nhap ten tac gia',
            },
            thumbnail: {
                required: 'vui long nhap thumbnail',
            },
            link: {
                required: 'vui long nhap link bai hat',
            },
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var senderObject = {
                name: $(form["name"]).val(),
                singer: $(form["singer"]).val(),
                description: $(form["description"]).val(),
                author: $(form["author"]).val(),
                thumbnail: $(form["thumbnail"]).val(),
                link: $(form["link"]).val(),

            };
            $.ajax({
                url: CREATE_SONG_API,
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(senderObject),
                headers: { 'Authorization': "Basic "+localStorage.getItem('my-token') },
                success: function (data, textStatus, jqXHR) {
                    alert('bai hat thanh cong');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                        $('#summary')
                            .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                        validator.showErrors(jqXHR.responseJSON.error);
                    }
                }
            });
            return false;
        }
});