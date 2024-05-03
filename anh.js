let image = document.getElementById("myImage");
                
                        image.addEventListener("cilck", function() {
                            location.reload();
                        });



let imgContainer = document.getElementById("img-container");

            let slideIndex = 0;
            showSlides();

                function showSlides() {
                    let i;
                    let slides = document.getElementsByClassName("slide-img");
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                    }
                    slideIndex++;
                    if (slideIndex > slides.length) {slideIndex = 1}
                    slides[slideIndex-1].style.display = "block";
                    setTimeout(showSlides, 5000); 
                }