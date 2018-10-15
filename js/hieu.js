/* ----------------------------- */
/* header */
function responsivenav() {
	var x = document.getElementById("myTopnav");
    if (x.className === "navheader") {
        x.className += " responsive";
    } else {
        x.className = "navheader";
    }
}

/* ----------------------------- */