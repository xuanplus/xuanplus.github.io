window.onload = function () {
    var v = document.querySelectorAll("colgroup")

    for (const iterator of v) {
        iterator.remove()
    }
}