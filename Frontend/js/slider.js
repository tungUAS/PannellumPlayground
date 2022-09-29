

function hotspotSlider(hotSpotDiv, args) {
    hotSpotDiv.classList.add("custom-tooltip");
    var span = document.createElement("span");
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + "px";
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
    span.style.marginTop = -span.scrollHeight - 12 + "px";
    loadSlider(hotSpotDiv);
}

function loadSlider(hotSpotDiv) {
    const newSlider = document.createElement("div");
    newSlider.innerHTML = `<div class="carousel">
          <div class="carousel-inner">
              <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
              <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Menu1">
              </div>
              <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
              <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=Menu2">
              </div>
              <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
              <div class="carousel-item">
                  <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Menu3">
              </div>
              <ol class="carousel-indicators">
                  <li>
                      <label for="carousel-1" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label for="carousel-2" class="carousel-bullet">•</label>
                  </li>
                  <li>
                      <label for="carousel-3" class="carousel-bullet">•</label>
                  </li>
              </ol>
          </div>
      </div>
      `;
    hotSpotDiv.appendChild(newSlider);
}

export default hotspotSlider;