export default function checkbox() {
  let checkboxs = document.querySelectorAll("[type=checkbox]");
  for (let checkbox of checkboxs) {
    checkbox.addEventListener("change", function () {
      let checks = document.getElementsByClassName("checkCategory");
      if (AllCategory.checked) {
        for (check of checks) {
          //проверка для главного чек-бокса
          check.checked = true;
          check.setAttribute("disabled", "disabled");
        }
      } else {
        for (check of checks) {
          check.removeAttribute("disabled");
        }
      }
      let checks = document.getElementsByClassName("defence");
      if (defence.checked) {
        for (check of checks) {
          //проверка для категории дефенс
          check.checked = true;
          check.setAttribute("disabled", "disabled");
        }
      } else {
        for (check of checks) {
          check.removeAttribute("disabled");
        }
      }
      let checks = document.getElementsByClassName("Augmentations");
      if (body.checked) {
        for (check of checks) {
          //проверка для категории Augmentations
          check.checked = true;
          check.setAttribute("disabled", "disabled");
        }
      } else {
        for (check of checks) {
          check.removeAttribute("disabled");
        }
      }
      let checks = document.getElementsByClassName("checkCountry");
      if (Allcountry.checked) {
        for (check of checks) {
          //проверка для категории стран
          check.checked = true;
          check.setAttribute("disabled", "disabled");
        }
      } else {
        for (check of checks) {
          check.removeAttribute("disabled");
        }
      }
    });
  }
}