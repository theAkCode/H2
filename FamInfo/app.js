
const form = document.getElementById("addMemberForm");
const familyList = document.getElementById("familyList");


form.addEventListener("submit", function(event) {
    event.preventDefault();  

    
    const name = document.getElementById("name").value;
    const needs = document.getElementById("needs").value;

    
    const listItem = document.createElement("li");
    listItem.classList.add("family-member");

    
    listItem.innerHTML = `
        <strong>${name}</strong>: ${needs} 
        <button class="remove-button">Remove</button>
    `;

    
    familyList.appendChild(listItem);

   
    const removeButton = listItem.querySelector(".remove-button");
    removeButton.addEventListener("click", function() {
        familyList.removeChild(listItem); 
    });

   
    form.reset();

   
    alert("Needs recorded and notified");
});
