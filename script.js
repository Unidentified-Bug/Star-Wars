
$(document).ready(function() {
    function getData() {
        // random Generator
        let rando = Math.floor(Math.random() * 80);

        $.ajax({
            url: `https://akabab.github.io/starwars-api/api/id/${rando}.json`,
            method: 'GET',
            success: function(data) {
                $('#img').attr('src', data.image);
                $('#deets').html('Name : ' + data.name);
                $('#gender').html('Gender : ' + data.gender);
                $('#cybernetics').html('Cybernetics : ' + (data.cybernetics ?? 'Cybernetics Unknown'));
                $('#master').html('Master : ' + (data.master ?? 'No Known Master(s)'));
                $('#homeworld').html('Homeworld : ' + (data.homeworld ?? 'OOPS, Unavailable'));
            },
            error: function(error) {
                console.error('Error:', error);
            }
        });
    }

    // Attach click handler using jQuery
    $('button').on('click', getData);
});





