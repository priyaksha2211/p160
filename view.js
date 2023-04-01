AFRAME.registerComponent("home-side-view", {
    init: function(){
        this.createHome();
    },
    createHome: function(){
        const homeViewContainer = document.querySelector("#home-view-container");
        let previousXPostion = -100;
        let previousYPostion = 10;
        let previousZPosition = 40;

        for(var i = 1; i <= 2; i++){
            const position = {
                x: (previousXPostion += 25),
                y: (previousYPostion += 5),
                z: (previousZPosition -= 100)
            };
            const entityEl = this.createHomeThumbnail(position, i);
            homeViewContainer.appendChild(entityEl);
        }
    },
    createHomeThumbnail: function(position, id){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `home-${id}`);

        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 10
        });

        entityEl.setAttribute("material", {
            src: "./assets/home.png",
            opacity: 0.9,
            rotation: "0 110 0"
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    }
});