
      function toggleChatBot(){
        const chatbotFrame = document.getElementById("iframe_block");
        if(chatbotFrame.style.display === "none"){ 
          chatbotFrame.style.display = "block";
        }else{
          chatbotFrame.style.display = "none";
        }
      }

      function openListPopUp(){
        const popupScreen = document.getElementById("popup-screen");
        popupScreen.style.visibility = "visible";
        console.log("Hello")
      }

      function closeListPopUp(){  
        const popupScreen = document.getElementById("popup-screen");
        popupScreen.style.visibility = "hidden";
      }