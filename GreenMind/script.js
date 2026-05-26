(function () {
    const track = document.getElementById("instantTrack");
    if (!track) return;
    
    let isTransitioning = false;

    function performSlide() {
      if (isTransitioning) return;
      isTransitioning = true;

      const cards = track.querySelectorAll(".testimonial-card");
      if(cards.length < 2) { isTransitioning = false; return; }
      
      const firstCard = cards[0];
      const shiftX = 832; // width(800) + gap(32)

      // Trigger CSS hardware acceleration translation smoothly
      cards.forEach(card => {
        card.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        card.style.transform = `translateX(-${shiftX}px)`;
      });

      setTimeout(() => {
        cards.forEach(card => {
          card.style.transition = "none";
          card.style.transform = "translateX(0px)";
        });
        
        track.appendChild(firstCard); 
        isTransitioning = false;
      }, 800);
    }

    // Interval locked to exactly 3.5 seconds
    setInterval(performSlide, 3500);
  })();