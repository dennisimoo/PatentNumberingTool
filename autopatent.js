function onOpen() {
    DocumentApp.getUi().createMenu('Paragraph Tools')
      .addItem('Auto Number Paragraphs', 'numberParaAdd')
      .addToUi();
  }
  
  function numberParaAdd() {
    var document = DocumentApp.getActiveDocument();
    var body = document.getBody();
    var paragraphs = body.getParagraphs();
    var numbers = 0;
  
    for (var i = 0; i < paragraphs.length; i++) {
      var element = paragraphs[i];
      var text = element.getText();
      var type = element.getHeading();
  
      // Exclude non-normal paragraphs
      if (type !== DocumentApp.ParagraphHeading.NORMAL) {
        continue;
      }
  
      // Check if the paragraph starts with a four-digit number in brackets [0001], [0004], etc.
      if (text.match(/^\[\d{4}\]/)) {
        numbers++;
        var numbering = Utilities.formatString("[%04d]", numbers);
        var newText = numbering + ' ' + text.replace(/^\[\d{4}\]\s*/, '');
        element.setText(newText);
      }
    }
  }
  