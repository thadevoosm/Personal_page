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


  const typedTextSpan = document.querySelector(".name");
  const cursorSpan = document.querySelector(".type-cursor");
  
  const textArray = ["Thadevoos"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 500; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1000);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });
  