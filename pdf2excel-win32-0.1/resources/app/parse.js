let pdfreader = require('electron').remote.require('pdfreader')
var xlsx = require('node-xlsx').default
let fs = require('fs')


new Noty({
    text: "there may be errors while reading the file, and if it doesn't work for multiple pages tell me and try one at a time! (click me to make me go away)",
    type: 'info',
    layout: 'bottomCenter',
}).show();


var rows = {}; // indexed by y-position

var data = []

function addRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach(y => data.push((rows[y] || [])));
}

function saveFile(filename) {
  //clean data
  for (var i in data) {
    for (var j in data[i]) {
      data[i][j] = data[i][j].trim()
    }
  }

  var buffer = xlsx.build([{name: filename, data: data}]);
  //write file
  fs.writeFile(filename + ".xlsx", buffer, err => {
      if (err) {
          console.log(err);
          new Noty({
              text: "Error writing file",
              timeout: 3000,
              type: 'success',
              layout: 'bottomCenter',
          }).show();

      } else {
        new Noty({
            text: "Excel file saved to " + filename + ".xlsx",
            timeout: 3000,
            type: 'success',
            layout: 'bottomCenter',
        }).show();
      }
  });

}


function fileChanged() {

  excel_filename = document.getElementById("excel-filename").value

  if (excel_filename === "") {
    new Noty({
        text: "Please specify a filename",
        timeout: 3000,
        type: 'error',
        layout: 'bottomCenter',
    }).show();
    return
  }

  filename = document.getElementById("pdf-input").files[0].path

  new Noty({
      text: "Processing...",
      timeout: 3000,
      type: 'success',
      layout: 'bottomCenter',
  }).show();

  new pdfreader.PdfReader().parseFileItems(filename, function(
    err,
    item

  ) {
    if (!item || item.page) {

      //if end of file
      if (!item) {
        addRows()
        saveFile()
      } else {
        addRows()
      }
      rows = {}; // clear rows for next page

    } else if (item.text) {
      // accumulate text items into rows object, per line
      (rows[item.y] = rows[item.y] || []).push(item.text);
    }

  });


}
