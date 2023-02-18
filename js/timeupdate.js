function getUpdatedTime() {
    var lastModified = new Date(document.lastModified);
    return lastModified.toLocaleString();
}

document.getElementById("updated-time").innerHTML = "Last updated: " + getUpdatedTime();
