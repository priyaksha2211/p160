AFRAME.registerComponent("tour", {
    schema: {
        state: { type: "string", default: "places-list" },
        selectedHome: { type: "string", default: "" }
    },
    init:function(){
        this.placesContainer = this.el;
    },
    tick: function(){
        const { state } = this.data;
        if(state == "view-home"){
            this.showHouseView();
            this.hideEl([this.placesContainer]);
        }
    },
    showHouseView: function(){
        const { selectedHome } = this.data;
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material", {
            src: `./assets/${selectedHome}.png`,
            color: "#fff"
        });
    },
    hideEl: function(elList){
        elList.map(el => {
            el.setAttribute("visible", false);
        });
    }
});