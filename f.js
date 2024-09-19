document.getElementById("wothdrawMonyShowButton").addEventListener("click", () => {
    document.getElementById("cashOutForm").classList.remove("hidden");
    document.getElementById("addMonyForm").classList.add("hidden");
});

document.getElementById("addMonyShowButton").addEventListener("click", () => {
    document.getElementById("cashOutForm").classList.add("hidden");
    document.getElementById("addMonyForm").classList.remove("hidden");
});
