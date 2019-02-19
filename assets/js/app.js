$(function() {
    // Submit button function
    $('#submitForm').on('submit', function (e) {
        e.preventDefault();
        let newburger = { burger: $('#burger').val() };
        $.post('/api/new', newburger)
            .then(() => {
                location.reload();
            });
    });

    // Devour button
    $('.eatBtn').click(function () {
        var id = $(this).data('id');
        // Passes the id as a parameter which is recieved in the controller via req.params.id
        $.ajax("/api/update/" + id, {
            type: "PUT"
        }).then(() => {
            console.log("Updated id: ", id);
            location.reload();
        });
    });
})