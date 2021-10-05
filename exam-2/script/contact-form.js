const contactFormButton = document.querySelector('#contactSubmit');
contactFormButton.addEventListener("click", validateForm);

function validateForm(event) {
    let name = document.contactForm.name.value,
    email = document.contactForm.email.value,
    atposition = email.indexOf("@"),
    dotposition = email.lastIndexOf(".");
    if (name == "" || Number(name)) {
        alert("Incorrect Name");
        document.contactForm.name.style.borderColor = "red";
        document.contactForm.name.focus();
        event.preventDefault();
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address");
        document.contactForm.name.style.borderColor = "rgba(44, 64, 88, 0.2)";
        document.contactForm.email.style.borderColor = "red";
        document.contactForm.email.focus();
        event.preventDefault();
    } else {
        alert("Thank you for submitting. We will contact you within 24 hours.");
        sendContacts(event);
    }
};

function sendContacts(event) {
    event.preventDefault();
    const contactForm = document.querySelector("#contactForm"),
      nameInput = document.querySelector("#name"),
      emailInput = document.querySelector("#email"),
      contactFD = new FormData(contactForm),
      url = "http://httpbin.org/post",
      req = new Request(url, {
        body: contactFD,
        method: "POST",
      });
    fetch(req)
      .then((res) => {
        if (res.status !== 200) alert(`Error ${res.status}`);
        else return res.json();
      })
      .then((data) => {
        if (data) {
          console.log("Response from server for search");
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
    nameInput.value = "";
    emailInput.value = "";
  }