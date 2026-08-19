function (element, input) {

    var rows = document.querySelectorAll('[role="row"]');

    var output = [];

    rows.forEach(function(row, r) {

        var cells = row.querySelectorAll('[role="gridcell"], td');

        if (cells.length > 0) {

            var values = [];

            cells.forEach(function(cell, c) {
                values.push("[" + c + "] " + cell.innerText.trim());
            });

            output.push("ROW " + r + "\n" + values.join("\n"));
        }
    });

    return output.join("\n\n====================\n\n");

}