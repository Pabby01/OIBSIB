document.addEventListener('DOMContentLoaded', function() {
    let progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(progressBar) {
        let width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 200);
    });
});
