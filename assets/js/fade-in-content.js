function fadeInPageContent() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.classList.add('show');
}

function onIframeLoaded() {
    setTimeout(fadeInPageContent, 200);
}

document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.querySelector('iframe');
    if(iframe){
        iframe.addEventListener('load', onIframeLoaded);
    } else {
        setTimeout(fadeInPageContent, 200);
    }
});
