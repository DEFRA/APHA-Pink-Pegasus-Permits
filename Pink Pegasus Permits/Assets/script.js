function(element, input) {

    var result = [];
    var headers = [];

    document.querySelectorAll("[role='columnheader']").forEach(function(header) {
        headers.push(header.innerText.trim());
    });

    document.querySelectorAll("[role='row']").forEach(function(row, index) {

        if (index === 0)
            return;

        var obj = {};
        var cells = row.querySelectorAll("[role='gridcell']");

        cells.forEach(function(cell, i) {
            obj[headers[i]] = cell.innerText.trim();
        });

        result.push(obj);

    });

    return JSON.stringify(result);

}