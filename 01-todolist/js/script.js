$(function() {
        //Deadline Format
        $('#deadline').datetimepicker({
            format: 'DD-MM-YYYY HH:mm:ss'
        });
        //   Edit and Create Validation


    $('#updateForm').validate({
        rules: {
            title: {
                required: true,
                minlength: 3,
                maxlength: 12
            },
            body: {
                required: true,
                minlength: 8,
                maxlength: 100
            },
            priority: {
                required: true
            },
            deadline: {
                required: true,
                datetime: true
            }
        }
    });
    $('#createForm').validate({
        rules: {
            title: {
                required: true,
                minlength: 3,
                maxlength: 12
            },
            body: {
                required: true,
                minlength: 8,
                maxlength: 100
            },
            priority: {
                required: true
            },
            deadline: {
                required: true,
                datetime: true
            }
        }
    });

        // Style Errors in Validation
        $('#title-error').css({
                "color":"red",
                "font-size":"0.9em",
                "margin-left":"5px",
                "float": "left"
        });



});