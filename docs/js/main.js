 // fake-placeholder

 const formInputs = document.querySelectorAll(".form-field");

 for (let item of formInputs) {
     const inputPlaceholder = item.nextElementSibling;

     item.addEventListener("focus", function () {
         inputPlaceholder.classList.add("active");
     });

     item.addEventListener("blur", function(){
         if(this.value == ""){
             inputPlaceholder.classList.remove("active");
         }
     })
 };

      let containerE1 = document.querySelector("#portfolio-projects");

      let mixer = mixitup(containerE1, {
          classNames: {
              block: ""
          }
      });

    //  // фильтрация проектов
      let containerE1 = document.querySelector("#portfolio-projects");

      let mixer = mixitup(containerE1, {
          classNames: {
              block: ""
          }
      });

      let filterToggles = document.querySelectorAll(".portfolio-works-toggle button");
      let portfolioBigCards = document.querySelectorAll(".portfolio-card");
 
      for (let i = 0; i < filterToggles.length; i++) {
          filterToggles[i].addEventListener("click", function (){
              if (i ==0) {
                  for (let j = 0; j < 2; j++){
                      portfolioBigCards[j].classList.add("portfolio-card--big")
                  }
              } else {
                  for (let j = 0; j < 2; j++){
                      portfolioBigCards[j].classList.remove("portfolio-card--big")
                  }
              }
         });