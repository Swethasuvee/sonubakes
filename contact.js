document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const order = document.getElementById("order").value.trim();
  
      if (name && order) {
        const message = `Hi, I am ${name}. I'd like to order: ${order}`;
        const whatsappURL = `https://wa.me/919047253838?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
      }
    });
  });
  