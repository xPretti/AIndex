const categoryButtons = document.querySelectorAll(".category-button");

/*
 * Global variavles
 */
let cartResults = document.getElementById("results");
let cartResultArea = document.getElementById("results-area");

let currentClickedButton = null;
let currentCategory = ENUM_CATEGORY_TYPE.ALL;

/*
 * EVENTS
 */
function onClickCategory(button, category) {
  if (currentClickedButton != button) {
    if (currentClickedButton != null && currentClickedButton != button) {
      currentClickedButton.classList.remove("active");
    }
    currentCategory = category;
    currentClickedButton = button;
    button.classList.add("active");

    loadCategories(category);
  }
}
function onCLickLink(button) {
    
}

/*
 * FUNCTIONS
 */
function loadCategories(category) {
  let result = "";
  if (aiDatabase.length > 0) {
    aiDatabase.forEach((element) => {
      if (element.category & category) {
        result += getCardSyntax(element);
      }
    });
  }
  cartResults.innerHTML = result;
}

/*
 * Initialize
 */
categoryButtons.forEach((button) => {
  if (button.getAttribute("id") == "btn-all") {
    onClickCategory(button, ENUM_CATEGORY_TYPE.ALL);
  }
});
