function(element, input) {

    var results = [];

    document.querySelectorAll("[role='row']").forEach(function(row, index){

        if(index === 0)
            return;

        var cells = row.querySelectorAll("[role='gridcell']");

        if(cells.length >= 6){

            results.push({
                Name: cells[1].innerText.trim(),
                Submission: cells[2].innerText.trim(),
                Application: cells[3].innerText.trim(),
                Species: cells[4].innerText.trim(),
                Status: cells[5].innerText.trim()
            });

        }

    });

    return JSON.stringify(results);

}