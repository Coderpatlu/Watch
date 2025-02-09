const images = document.querySelectorAll('.right img');
  let currentIndex = 0;

  function sliderEffect() {
    images.forEach((img, index) => {
      img.style.transition = 'all 0.8s ease-in-out';

      if (index === currentIndex) {
        img.style.height = '300px';
        img.style.top = '20%';
        img.style.right = '20%';
        img.style.opacity = '1';
        img.style.zIndex = '99';
        img.style.display = 'block';
      } else if (index === (currentIndex + images.length - 1) % images.length) {
      
        img.style.height = '150px';
        img.style.top = '60%';
        img.style.right = '5%';
        img.style.opacity = '0.5';
        img.style.zIndex = '77';
        img.style.display = 'block';
      } else if (index === (currentIndex + 1) % images.length) {
        // Next Image (Top Right)
        img.style.height = '150px';
        img.style.top = '3%';
        img.style.right = '5%';
        img.style.opacity = '0.5';
        img.style.zIndex = '77';
        img.style.display = 'block';
      } else {
      
        img.style.height = '300px';
        img.style.right = '-40%';
        img.style.opacity = '0';
        img.style.display = 'block';
      }
    });

    
    currentIndex = (currentIndex + 1 + images.length) % images.length;
  }
  setInterval(sliderEffect, 3000); 
