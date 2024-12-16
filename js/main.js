const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

// Handle comments
document.getElementById('submit-comment').addEventListener('click', () => {
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
  
    const commentText = commentInput.value.trim();
    if (commentText) {
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.textContent = commentText;
  
      commentList.appendChild(newComment);
      commentInput.value = ''; // Clear input
    } else {
      alert('Please write a comment before submitting!');
    }
  });
  
  // Handle love score
  let loveCount = 0;
  const maxLove = 5;
  
  document.getElementById('add-love').addEventListener('click', () => {
    if (loveCount < maxLove) {
      loveCount++;
      document.getElementById('love-counter').textContent = `Loves: ${loveCount}/5`;
    } else {
      alert('You have reached the maximum love score!');
    }
  });