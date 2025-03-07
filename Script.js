// Screen Grab Feature - Press Ctrl + S to take a screenshot
document.addEventListener('keydown', function(event) {
    if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
        takeScreenshot();
    }
});

function takeScreenshot() {
    html2canvas(document.body).then(canvas => {
        let link = document.createElement('a');
        link.download = 'novasearch_screenshot.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Theme Customization - Press "T" to switch themes
const themes = ['dark', 'neon', 'pastel'];
let currentTheme = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
        currentTheme = (currentTheme + 1) % themes.length;
        changeTheme(themes[currentTheme]);
    }
});

function changeTheme(theme) {
    document.body.className = theme;
}
