let currentHeroIndex = 0;
        const slides = document.querySelectorAll('.slide-hero');
        const prev = document.querySelector(".prev-hero")
        const next = document.querySelector(".next-hero")

        function showSlide(index) {
            const slider = document.getElementById('slider-hero');
            const totalSlides = slides.length;
            if (index >= totalSlides) {
                currentHeroIndex = 0;
            } else if (index < 0) {
                currentHeroIndex = totalSlides - 1;
            } else {
                currentHeroIndex = index;
            }
            slider.style.transform = `translateX(-${currentHeroIndex * 100}%)`;
        }

        prev.addEventListener("click",()=>{
            console.log("clicked")
            showSlide(currentHeroIndex - 1);

        })

        next.addEventListener("click",()=>{
            showSlide(currentHeroIndex+1)
        })



        // function nextSlide() {
        //     console.log("Next is clicked")
        //     showSlide(currentIndex + 1);
        // }

        // function prevSlide() {
           
        // }