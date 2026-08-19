function (element, input) {

    var rows = document.querySelectorAll('[role="row"]');

    for (var r = 0; r < rows.length; r++) {

        var cells = rows[r].querySelectorAll('[role="gridcell"], td');

        if (cells.length >= 6) {

            var path = cells[5].innerText.trim();

            if (path.indexOf('/') > -1) {
                return path.substring(0, path.indexOf('/'));
            }
        }
    }

    return "PATH_NOT_FOUND";

}