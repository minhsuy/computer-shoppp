window.addEventListener("load", function () {
  // slider
  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // fixed-menu
  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const header = document.querySelector(".header");
  const headerHeight = header.clientHeight;
  window.addEventListener(
    "scroll",
    debounceFn(function () {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= headerHeight) {
        header.classList.add("is-fixed");
        document.body.style.paddingTop = `${headerHeight}px`;
      } else {
        header.classList.remove("is-fixed");
        document.body.style.paddingTop = 0;
      }
    }, 100)
  );
  // back to top
  const button = document.querySelector(".button");
  window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 250) {
      button.classList.add("is-active");
    } else {
      button.classList.remove("is-active");
    }
  });
  document.addEventListener("click", function (event) {
    const icon = document.querySelector(".button i");
    if (
      event.target.contains(icon) ||
      event.target.classList.contains("is-active")
    ) {
      document.documentElement.scrollTop = 0;
    }
  });
  // cart
  const cart = document.querySelector(".header-top-user_cart .cart-shopping");
  cart.addEventListener("click", function (event) {
    const template = `<div class="cart-info">
    <p>Có 0 sản phẩm trong giỏ hàng</p>
   </div>`;
    cart.insertAdjacentHTML("afterbegin", template);
  });
  document.addEventListener("click", function (event) {
    const cartInfo = document.querySelector(".cart-info");
    if (cartInfo) {
      if (!event.target.matches("cart-info")) {
        cartInfo.parentElement.removeChild(cartInfo);
      }
    }
  });
  // toggle list 

//   <div class="toggle-bars">
//   <div class="toggle-list">
//       <a href="product.html" target="_blank">Tất cả sản phẩm</a>
//       <a href="pcgamiing.html" target="_blank">PC Gaming</a>
//       <a href="laptop.html" target="_blank">Laptop</a>
//       <a href="gioithieu.html" target="_blank">Giới Thiệu</a> 
//       <a href="display.html" target="_blank">Màn hình</a> 
//   </div>
// </div


  // toggle list 

  
});
const toggle = document.querySelector(".list-toggle");
const toggleBars = document.createElement("div");
toggleBars.className = "toggle-bars";
const toggleList = document.createElement("div");
toggleList.className = "toggle-list";
toggleBars.appendChild(toggleList);
// 1
const toggleListItem1 = document.createElement("a");
toggleListItem1.setAttribute("href","product.html");
toggleListItem1.setAttribute("target","_blank");
toggleListItem1.textContent = "Tất cả sản phẩm";
toggleList.appendChild(toggleListItem1);
//2
const toggleListItem2 = document.createElement("a");
toggleListItem2.setAttribute("href","pcgamiing.html");
toggleListItem2.setAttribute("target","_blank");
toggleListItem2.textContent = "PC Gaming";
toggleList.appendChild(toggleListItem2);
//3
const toggleListItem3 = document.createElement("a");
toggleListItem3.setAttribute("href","laptop.html");
toggleListItem3.setAttribute("target","_blank");
toggleListItem3.textContent = "Laptop";
toggleList.appendChild(toggleListItem3);
//4
const toggleListItem4 = document.createElement("a");
toggleListItem4.setAttribute("href","gioithieu.html");
toggleListItem4.setAttribute("target","_blank");
toggleListItem4.textContent = "Giới Thiệu";
toggleList.appendChild(toggleListItem4);
//5
const toggleListItem5 = document.createElement("a");
toggleListItem5.setAttribute("href","display");
toggleListItem5.setAttribute("target","_blank");
toggleListItem5.textContent = "Màn hình";
toggleList.appendChild(toggleListItem5);
toggle.appendChild(toggleBars);
toggle.addEventListener("click",function(event){
  toggleList.classList.toggle("is-show");
});


//toggle



//chat box
var chatOpen = false;

function sendMessage() {
  var input = document.getElementById("input-message");
  var message = input.value;

  if (message.trim() === "") return;

  appendMessage("You: " + message, "user-message");

  // Bot response (for demonstration purposes, this is a static response)
  setTimeout(function () {
    appendMessage("Bot: Hello! How can I assist you?", "bot-message");
  }, 500);

  input.value = "";
  input.focus();
}

function appendMessage(message, className) {
  var chatMessages = document.getElementById("chat-messages");
  var messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message");
  messageElement.classList.add(className);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatMessages.scrollIntoView(false); // Cố gắng cuộn tin nhắn vào tầm nhìn
}

function toggleChat() {
  var chatContainer = document.getElementById("chat-container");
  if (chatOpen) {
    chatContainer.style.display = "none";
  } else {
    chatContainer.style.display = "block";
  }
  chatOpen = !chatOpen;
}
document
  .getElementById("input-message")
  .addEventListener("keypress", function (event) {
    // Kiểm tra xem phím nhấn có phải là Enter không (keyCode của phím Enter là 13)
    if (event.keyCode === 13) {
      // Ngăn chặn hành động mặc định của phím Enter (tránh việc gửi biểu mẫu)
      event.preventDefault();
      // Gửi tin nhắn
      sendMessage();
    }
  });
function sendMessage() {
  var input = document.getElementById("input-message");
  var message = input.value;

  if (message.trim() === "") return;

  appendMessage("You: " + message, "user-message");

  // Kiểm tra nội dung tin nhắn để đưa ra phản hồi phù hợp
  var response;
  if (message.toLowerCase().includes("bây giờ là mấy giờ")) {
    response = "Bot: Hiện tại là " + getCurrentTime() + ".";
  } else if (message.toLowerCase().includes("helo")) {
    response = "Bot: xin chào rất vui được gặp bạn.";
  } else if (message.toLowerCase().includes("web của tôi")) {
    response = "Bot: HTX EATU COFFEE.";
  } else if (message.toLowerCase().includes("my web")) {
    response = "Bot: Trang web của bạn viết về HTX nông nghiệp.";
  } else {
    // Bot response (for demonstration purposes, this is a static response)
    response = "Bot: Xin chào, tôi có thể giúp gì cho bạn.";
  }

  // Phản hồi tin nhắn
  setTimeout(function () {
    appendMessage(response, "bot-message");
  }, 300);

  input.value = "";

  // Tập trung lại vào ô nhập tin nhắn sau khi gửi tin nhắn
  input.focus();
}

// Hàm để lấy thời gian hiện tại
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  // Định dạng giờ và phút thành chuỗi "HH:MM"
  return (
    (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes
  );
}
