 const toggleBtn = document.querySelector(".toggle__btn");
      const toggleBtnIcon = document.querySelector(".toggle__btn i");
      const menu = document.querySelector(".nav__links");

      toggleBtn.onclick = function () {
        menu.classList.toggle("open");
        const isOpen = menu.classList.contains("open");

        toggleBtnIcon.classList = isOpen ? "ri-close-line" : "ri-menu-line";
      };