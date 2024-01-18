function generatePDF() {
    var datacom = document.getElementById('data-com');
    var filenameInput = document.getElementById('headingInput').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_DataCom" || 'datacom.pdf',
    };
    html2pdf(datacom, pdfOptions);
}
function generateOS() {
    var os = document.getElementById('os');
    var filenameInput = document.getElementById('headingInput').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_OS" || 'datacom.pdf',
    };
    html2pdf(os,pdfOptions);
}
function generatePe() {
    var per = document.getElementById('peripheral');
    var filenameInput = document.getElementById('headingInput').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_Peripheral" || 'datacom.pdf',
    };
    html2pdf(per,pdfOptions);
}

function changeHeading() {
    var newHeading = document.getElementById('headingInput').value;
    document.getElementById('dynamicHeading').innerText = newHeading;
    document.getElementById('dynamicHeading1').innerText = newHeading;
    document.getElementById('dynamicHeading2').innerText = newHeading;

    var newReg = document.getElementById('headingReg').value;
    document.getElementById('dynamicReg').innerText = newReg;
    document.getElementById('dynamicReg1').innerText = newReg;
    document.getElementById('dynamicReg2').innerText = newReg;

    var newRoll = document.getElementById('headingRoll').value;
    document.getElementById('dynamicRoll').innerText = newRoll;
    document.getElementById('dynamicRoll1').innerText = newRoll;
    document.getElementById('dynamicRoll2').innerText = newRoll;
}