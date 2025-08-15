export function initCallbackForm() {
  const callbackForm = document.querySelector(".callback-form");
  const closeButton = document.getElementById("closeWindowCallback");
  const logo = document.querySelector(".header__logo-wrapper");

  if (!callbackForm || !closeButton || !logo) return;

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("close");
    callbackForm.classList.add("callback-form_none");
  });

  logo.addEventListener("click", () => {
    console.log("щз");
    callbackForm.classList.remove("callback-form_none");
  });
}
