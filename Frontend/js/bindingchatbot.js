function hotspotChatBot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    var bot = document.createElement("div");
    bot.innerHTML =
        `<div id="iframe_block" class="chatbot invisible" style="width: 475px; height: 600px; visibility=hidden!important">
        <iframe id="iframe" class="chat-window " src="https://oth-regensburg.eu-de.mybluemix.net" allowusermedia="" allow="microphone" data-src="about:blank" frameborder="0" allowfullscreen="" style="visibility: visible;"></iframe>
        </div>
        <button onclick="toggleChatBot()" type="button">Close</button>`;
    hotSpotDiv.appendChild(bot);
}   

export default hotspotChatBot;