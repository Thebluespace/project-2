$(document).ready(function () {
    let usersDesigns;
    function getDesigns() {

        $.get("/api/designs/currentuser", function (data) {
            usersDesigns= data;

            if (usersDesigns.length === 0){
                $("#cardArea").html("You don't have any saved designs :( ");
            }else{
                renderDesigns(usersDesigns);
            }

        });
    };
    getDesigns();
})

renderDesigns = (usersDesigns) =>{
    usersDesigns.forEach(element => {
        let thisCard = $("<div>");
        thisCard.addClass("card");
        thisCard.addClass(element.bgcolor);
        // thisCard.html(`
        // <div class="name">${element.name}</div>
        // <div class="phone">${element.phone}</div>
        // <div class="email">${element.email}</div>
        // <div class="url">${element.website}</div>
        // <div class="quote">${element.quote}</div>`);

        var html = "";

        if (element.name !== null){
            html += `<div class='name'>${element.name}</div>`
        }
        if (element.phone !== 0){
            html += `<div class='phone'>${element.phone}</div>`
        }
        if (element.email !== null){
            html += `<div class='email'>${element.email}</div>`
        }
        if (element.website !== null){
            html += `<div class='website'>${element.website}</div>`
        }
        if (element.quote !== null){
            html += `<div class='quote'>${element.quote}</div>`
        }

        thisCard.html(html);
        $("#cardArea").append(thisCard);
    });
}

$("#logout").on("click",(req) => {
    window.location = "/api/logout";
});
    
$("#newDesign").on("click", (req) =>{
    window.location = "/choosedesign"
})