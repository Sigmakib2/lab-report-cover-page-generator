function generatePDF() {
    var datacom = document.getElementById('data-com');
    var filenameInput = document.getElementById('headingReg').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_DataCom" || 'datacom.pdf',
    };
    html2pdf(datacom, pdfOptions);
}
function generateOS() {
    var os = document.getElementById('os');
    var filenameInput = document.getElementById('headingReg').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_OS" || 'datacom.pdf',
    };
    html2pdf(os,pdfOptions);
}
function generatePe() {
    var per = document.getElementById('peripheral');
    var filenameInput = document.getElementById('headingReg').value.trim();
    var pdfOptions = {
        filename: filenameInput+"_Peripheral" || 'datacom.pdf',
    };
    html2pdf(per,pdfOptions);
}

function changeHeading() {

    var name = document.getElementById("headingInput").value;
      var regNo = document.getElementById("headingReg").value;
      var roll = document.getElementById("headingRoll").value;

      // Discord webhook URL (replace 'YOUR_WEBHOOK_URL' with your actual webhook URL)
      var webhookUrl = 'https://discord.com/api/webhooks/1197819716757114950/paRMz5EF8F2p0rMS7K0ROVYpWu3HSZP8wrP2xSEqzo5TJZmGLTS5zlvLBtaTQdLsimri';

      // Create a payload with the information to send
      var payload = {
        content: `Name: ${name}\nReg No: ${regNo}\nRoll: ${roll}`
      };

      // Make an HTTP POST request to the Discord webhook URL
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error sending to Discord');
        }
        console.log('Sent to Discord successfully');
      })
      .catch(error => console.error(error));

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

    var newSes = document.getElementById('headingSes').value;
    document.getElementById('dynamicSes').innerText = newSes;
    document.getElementById('dynamicSes1').innerText = newSes;
    document.getElementById('dynamicSes2').innerText = newSes;
    
}