$(document).ready(function () {
    let usersDesigns;
    function getDesigns() {

        $.get("/api/savedDesign/", function (data) {
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
        thisCard.html(`
        <div class="name">${element.name}</div>
        <div class="phone">${element.phone}</div>
        <div class="email">${element.email}</div>
        <div class="url">${element.website}</div>
        <div class="quote">${element.quote}</div>`);

        $("#cardArea").append(thisCard);
    });
}

