document.getElementsByClassName('tab').item(0).click();
fileInput.addEventListener('change', function() {
    const fileInput = document.getElementById('fileInput');
    const fileChosen = document.getElementById('fileInput-label');

    fileChosen.textContent = this.files[0].name

})



socket = io();
socket.connect('http://127.0.0.1:5000/');

socket.on('connect', function() {
    socket.send('a')
})









socket.on('checkksurlresult', function(data) {
    const result = data['ksResult'];
    console.log(result)
        // console.log(result)

    // document.getElementById("ks-result-text").innerText = `<li>Zone: ${result['Zone']}</li><li>Category: ${result['Category']}</li>`;
    document.getElementById("ks-result-text").innerHTML = `<li>Zone: ${result['Zone']}</li><li>Category: ${result['Category']}</li>`;


})

function checkentity() {

    const value = document.getElementById("search-box").value;
    document.getElementById("result-ul-list").innerHTML = ""
        // document.getElementById("vt-result-text").innerHTML = "";
        // document.getElementById("db-result-text").innerHTML = "";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Step 5: Handle the response
            var response = xhr.responseText;
            console.log(response);
        }
    };

    xhr.open("GET", `http://127.0.0.1:5000/checkentity?ip=${value}`, true);
    xhr.send();


    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr2.responseText;
            console.log(response);
        }
    };

    xhr2.open("GET", `http://127.0.0.1:5000/checkvtip?ip=${value}`, true);
    xhr2.send();

    var xhr3 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr2.responseText;
            console.log(response);
        }
    };

    xhr3.open("GET", `http://127.0.0.1:5000/checkksip?ip=${value}`, true);
    xhr3.send();

    var xhr4 = new XMLHttpRequest();
    xhr4.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr2.responseText;
            console.log(response);
        }
    };

    xhr4.open("GET", `http://127.0.0.1:5000/honeyDBIP?ip=${value}`, true);
    xhr4.send();

    var xhr5 = new XMLHttpRequest();
    xhr5.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr2.responseText;
            console.log(response);
        }
    };

    xhr5.open("GET", `http://127.0.0.1:5000/abuseDBIP?ip=${value}`, true);
    xhr5.send();


}

function uploadFile() {

    // event.preventDefault();
    var fileInput = document.getElementById("fileInput");
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    formData.append("file", fileInput.files[0]);
    const uploadFileName = fileInput.files[0].name;

    xhr.open("POST", "/fileUpload", true);
    xhr.setRequestHeader("enctype", "multipart/form-data");

    document.getElementById("progress-wrapper").style.display = "block";

    // document.getElementById("file-wrapper").style.display = "none";

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("response").innerText = "File uploaded successfully.";
                var xhrGet = new XMLHttpRequest();
                xhrGet.open("GET", `/checkFile?fileName=${uploadFileName}`, true)
                xhrGet.send()
            } else {
                document.getElementById("response").innerText = "File upload failed.";
            }
        }
    };

    xhr.upload.onprogress = function(event) {
        var progress = (event.loaded / event.total) * 100;
        console.log(progress);
        document.getElementById("progress").style.width = `${progress}%`;
        document.getElementById("progress").innerText = `${Math.floor(progress)}%`;

    };


    xhr.send(formData);

}


function showTab(tabIndex) {
    var tabContents = document.querySelectorAll('.tab-content');
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        // tabs[i].style.backgroundColor = '#ccc';
        tabs[i].style.backgroundColor = '#2e10c6';
        tabs[i].style.color = "white"

    }

    tabContents[tabIndex - 1].style.display = 'flex';
    tabs[tabIndex - 1].style.backgroundColor = '#fff';
    tabs[tabIndex - 1].style.color = "black"
        // tabContents[tabIndex - 1].style.backgroundColor = "white"
}

function checkUrlEntity() {

    const value = document.getElementById("url-box").value;
    // document.getElementById("vt-result-text").innerHTML = "";
    // document.getElementById("db-result-text").innerHTML = "";
    document.getElementById("result-ul-list").innerHTML = ""

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Step 5: Handle the response
            var response = xhr.responseText;
            console.log(response);
        }
    };

    xhr.open("GET", `http://127.0.0.1:5000/checkurl?url=${value}`, true);
    xhr.send();


    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr2.responseText;
            console.log(response);
        }
    };

    xhr2.open("GET", `http://127.0.0.1:5000/checkvturl?url=${value}`, true);
    xhr2.send();

    var xhr3 = new XMLHttpRequest();
    xhr3.onreadystatechange = function() {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // Step 5: Handle the response
            var response = xhr3.responseText;
            console.log(response);
        }
    };

    xhr3.open("GET", `http://127.0.0.1:5000/checkksurl?url=${value}`, true);
    xhr3.send();


}


// function dropDown() {
//     console.log("DropDown called")

//     // document.getElementsByClassName("dropdownItems")[0].style.display = "block";

//     document.getElementsByClassName("dropdownItems")[0].classList.toggle("showdropdownItems")
// }