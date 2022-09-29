var sections = {
    it: {
        name: "Informatik",
        yaw: 0,
        pitch: 0,
        consultants: [{
                name: "Christian Hertlein",
                pic: "assets/Chef.jpg"
            },
            {
                name: "Holger Hornik",
                pic: "assets/Chef.jpg"
            },
        ]
    },
    human: {
        name: "Humanwissenschaften",
        yaw: 10,
        pitch: 20,
        consultants: [{
                name: "Felix Sturm",
                pic: "assets/Chef.jpg"
            },
            {
                name: "Marco Spinner",
                pic: "assets/Chef.jpg"
            },
        ]
    },
    economics: {
        name: "Wirtschaft",
        yaw: -70,
        pitch: 5,
        consultants: [{
            name: "Tung",
            pic: "assets/Chef.jpg"
        }, ]
    }
}

var rooms = {
    outside: ["it", "economics"],
    inside: ["human"]
}

function createConsultant(consultant_dict) {
    var consultant = document.createElement('li');
    var pic = document.createElement('img');
    pic.classList.add("card-pic");
    pic.src = consultant_dict.pic
    pic.alt = "Avatar"
    consultant.appendChild(pic)

    var txt = document.createElement('div')
    txt.innerHTML = `<h4><b>${consultant_dict.name}</b></h4>`;
    consultant.appendChild(txt)

    return consultant;
}

function createSection(hotSpotDiv, section_key) {
    hotSpotDiv.classList.add("section");
    
    // add tooltip element
    var span = document.createElement("span");
    span.classList.add("section-tooltip")
    span.innerHTML = sections[section_key].name;
    hotSpotDiv.appendChild(span);

    // create consultants
    var divConsultants = document.createElement("div");
    divConsultants.classList.add("div-consultants");
        var consultants = document.createElement("ol");
        
        // create listing button
        for (let c of sections[section_key].consultants) {
            consultants.appendChild(createConsultant(c));
        };
        
        var hamBtn = document.createElement('div');
        hamBtn.innerHTML = `<button onclick="openListPopUp()" class="list-button">List</button>`;
    divConsultants.appendChild(consultants);
    divConsultants.appendChild(hamBtn);
    
    hotSpotDiv.appendChild(divConsultants);
    
}


function createSectionHotspots(room) {
    var hotspots = [];
    for (let section of rooms[room]) {
        hotspots.push({
            pitch: sections[section].pitch,
            yaw: sections[section].yaw,
            cssClass: "section",
            createTooltipFunc: createSection,
            createTooltipArgs: section
        });
    };
    //openListPopUp();
    return hotspots;
}

export default createSectionHotspots;