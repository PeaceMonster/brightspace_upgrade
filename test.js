window.onload = function() {
    let myiFrame = document.getElementsByTagName("iframe")[0];
    let doc = myiFrame.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>#root-wrapper {max-width: none !important;}</style>';
 }