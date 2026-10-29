//open submenu
function openNav() {
  document.getElementById("mySubmenu").style.display = "flex";
  document.getElementById("mySubmenu").style.transition = "flex 1.0s ease";
}
//close submenu
function closeNav() {
  document.getElementById("mySubmenu").style.display = "none";
}


//open product modal
function openProductModal() {
    document.getElementById("productModal").style.display = "flex";
}

//close product modal
function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
    document.getElementById("productForm").reset();
}


//close product modal when clicking outside of it
window.onclick = function(event) {
    let modal = document.getElementById("productModal");
    if (event.target == modal) {
        closeProductModal();
    }
}