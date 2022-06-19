//scroll anchor links fixed
var switchView = function (hash = location.hash, adjust = 5) {

    /* change adjust value if necessary*/

    //get top position relative to viewport
    try {
        var elem = document.querySelector(hash);
        var elemRect = elem.getBoundingClientRect(),
            bodyRect = document.body.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;
        window.scroll({
            top: offset - adjust,
            behavior: 'smooth'
        })
    } catch (DOMException) {
        location.hash = "";
    }
}

document.addEventListener('DOMContentLoaded', () => { switchView() });
window.onhashchange = () => { switchView() }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.onclick = (e) => {

        //be sure the target is right
        //prevent <button> inside <a> case 
        var target = e.target;
        while (target.nodeName.toLowerCase() != "a") {
            target = target.parentNode
        }

        e.preventDefault()
        switchView(target.attributes.href.value)

        //auto close navbar
        $('.navbar-collapse').collapse('hide')

    }
})

