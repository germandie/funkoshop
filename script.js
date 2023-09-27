const rectangulo = document.getElementById('rectangulo');
let isResizing = false;
let initialX;
let initialY;

rectangulo.addEventListener('mousedown', (e) => {
    isResizing = true;
    initialX = e.clientX;
    initialY = e.clientY;
    e.preventDefault();
});

document.addEventListener('mousemove', resize);

document.addEventListener('mouseup', () => {
    isResizing = false;
});

function resize(e) {
    if (!isResizing) return;

    const width = rectangulo.offsetWidth;
    const height = rectangulo.offsetHeight;

    const deltaX = e.clientX - initialX;
    const deltaY = e.clientY - initialY;

    rectangulo.style.width = width + deltaX + 'px';
    rectangulo.style.height = height + deltaY + 'px';

    initialX = e.clientX;
    initialY = e.clientY;
}
