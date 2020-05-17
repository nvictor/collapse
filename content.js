chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked") {
            for (tag of document.getElementsByClassName("togg")) {
                if (tag.text.slice(0, 2) === "[–") { tag.click(); }
                if (parseInt(tag.getAttribute("n")) > 5) { tag.style.color = "red"; }
            }
        }
    }
);
