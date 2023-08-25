document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
  
    function updateCursorSize(isHovering) {
      const size = isHovering ? '40px' : '20px';
      cursor.style.transform = `translate(-50%, -50%) scale(${size})`;
    }
  
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
  
      const target = e.target;
      const isHovering = target.matches('a');
  
      updateCursorSize(isHovering);
    });
  
    // Optional: Reset cursor size when not hovering over an <a> tag
    document.addEventListener('mouseout', () => {
      updateCursorSize(false);
    });
  });
  
