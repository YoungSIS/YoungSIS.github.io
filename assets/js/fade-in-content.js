function fadeInPageContent() {
    document.querySelector('#main > .inner > section').classList.add('show');
}

function onIframeLoaded() {
    // Fade in the section after iframe has fully loaded
    setTimeout(fadeInPageContent, 200);
}

document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.querySelector('iframe');
    if(iframe){
        iframe.addEventListener('load', onIframeLoaded); // Trigger fade-in after iframe loads
    } else {
        setTimeout(fadeInPageContent, 200);
    }
});
