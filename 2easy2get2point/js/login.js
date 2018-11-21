var varlidate = $('#login-form').validate({
    rules: {
        email: {
            required: true,
            minlength: 2,

        },

        password: {
            required: true,
            minlength: 2,
            maxlength: 15,
        },
    },
    messages: {
        email: {
            required: 'vui long nhap ten cua ban',
            minlength: 'email cua ban qua ngan',

        },
        password: {
            required: 'Vui long nhap password cua ban',
            minlength: 'Pass nhap vao qua ngan. Toi thieu {0} ky tu',
            maxlength: 'Pass nhap vao qua dai',

        },

    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {

            email: $(form["email"]).val(),
            password: $(form["password"]).val(),

        };
        $.ajax({
            url: LOGIN_API,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            success: function (data, textStatus, jqXHR) {
                alert('dang ki thanh cong');
                localStorage.setItem('my-token',data.token);
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






