AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init: function(){
        this.handleMouseEnterEvents();
        this.handleClickEvents();
    },
    handleHomeListState: function(){
        const id = this.el.getAttribute("id");
        const homeId = ["garden", "house-interior"];
        if(homeId.includes(id)){
            const homeContainer = document.querySelector("#home-view-container");
            homeContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            });
        }
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
            this.handleHomeListState();
        });
    },
    handleClickEvents: function(){
        this.el.addEventListener("click", () => {
            const homeContainer = document.querySelector("#home-view-container");
            const { state } = homeContainer.getAttribute("tour");

            if(state == "places-list"){
                const id = this.el.getAttribute("id");
                const homeId = ['home-1', 'home-2'];
                //console.log(id);

                if(homeId.includes(id)){
                    homeContainer.setAttribute("tour", {
                        state: "view-home",
                        selectedHome: id
                    });
                }
                
            }
        });
    }
});