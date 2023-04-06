let selectBtn = document.querySelector(".sort");

if (selectBtn) {
  selectBtn.addEventListener("change", async () => {
    console.log(selectBtn.value);
    let data = await getSortedBy(selectBtn.value);

    attachCards(data);
  });
  home();
}

let submitBtn = document.querySelector(".submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const first_name = document.querySelector(".firstName").value;
    const last_name = document.querySelector(".lastName").value;
    const role = document.querySelector(".role").value;
    const gender = document.querySelector(".gender").value;
    const email = document.querySelector(".email").value;
    const phone = document.querySelector(".phone").value;
    postConstruction({ first_name, last_name, role, gender, email, phone });
  });
}
