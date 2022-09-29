import createSectionHotspots from "./consultants.js";
import hotspotChatBot from "./bindingchatbot.js";
import hotspotSlider from "./slider.js";

// Create viewer
pannellum.viewer("panorama", {
    default: {
        firstScene: "outside",
        sceneFadeDuration: 1000,
        autoLoad: true,
        preview:"assets/uni.jpg",
    },
    scenes: {
        outside: {
            hfov: 100,
            pitch: 0,
            yaw: -40,
            type: "equirectangular",
            panorama: "assets/uni.jpg",
            hotSpots: [{
                    pitch: -2.1,
                    yaw: -39.5,
                    type: "scene",
                    text: "Inside",
                    sceneId: "inside",
                },
                {
                    pitch: -15.9,
                    yaw: -11.4,
                    cssClass: "invisible",
                    createTooltipFunc: hotspotChatBot,
                    createTooltipArgs: ""
                },
            ].concat(createSectionHotspots("outside")),
        },

        inside: {
            title: "Outside",
            hfov: 500,
            yaw: 5,
            type: "equirectangular",
            panorama: "assets/inside.jpg",
            hotSpots: [{
                    pitch: -0.6,
                    yaw: -37.1,
                    type: "scene",
                    text: "Outside",
                    sceneId: "outside",
                    targetYaw: -23,
                    targetPitch: 2,
                },
                {
                    pitch: 10.1,
                    yaw: 30.5,
                    cssClass: "hotspotSlider",
                    createTooltipFunc: hotspotSlider,
                    createTooltipArgs: "Sliders",
                },
            ].concat(createSectionHotspots("inside")),
        },
    },
});

