pannellum.viewer("panorama", {
  default: {
    firstScene: "circle",
    author: "Matthew Petroff",
    preview:"assets/uni.jpg",
    sceneFadeDuration: 1000,
  },

  scenes: {
    circle: {
      title: "Mason Circle",
      hfov: 110,
      pitch: -3,
      yaw: 117,
      type: "equirectangular",
      panorama: "assets/uni.jpg",
      hotSpots: [
        {
          pitch: -2.1,
          yaw: 132.9,
          type: "scene",
          text: "Spring House or Dairy",
          sceneId: "house",
        },

        {
          pitch: 34.1,
          yaw: 10.5,
          cssClass: "hotspotCard",
          createTooltipFunc: hotspotCard,
          createTooltipArgs: "Christian Hertlein",
        },
        {
          pitch: 14.1,
          yaw: -80.5,
          cssClass: "hotspotChatBot",
          createTooltipFunc: hotspotChatBot,
          createTooltipArgs: "Chat Bot",
        },
        {
          pitch: 10.1,
          yaw: 30.5,
          cssClass: "hotspotSlider",
          createTooltipFunc: hotspotSlider,
          createTooltipArgs: "Sliders",
        },
      ],
    },

    house: {
      title: "Spring House or Dairy",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "assets/inside.jpg",
      hotSpots: [
        {
          pitch: -0.6,
          yaw: 37.1,
          type: "scene",
          text: "Mason Circle",
          sceneId: "circle",
          targetYaw: -23,
          targetPitch: 2,
        },
      ],
    },
  },
});
