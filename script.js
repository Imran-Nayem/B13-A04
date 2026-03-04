function toggleStyle(id) {

    const allButton = document.getElementById("all-filter-btn");
    const interviewButton = document.getElementById("interview-filter-btn");
    const rejectedBtn = document.getElementById("rejected-filter-btn");

    allButton.className = "bg-gray-300 rounded px-2 py-1";
    interviewButton.className = "bg-gray-300 rounded-md px-2 py-1";
    rejectedBtn.className = "bg-gray-300 rounded-lg px-2 py-1";

    document.getElementById(id).className = "bg-sky-600 px-2 py-1 rounded text-white";
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card =>{

    const status = card.querySelector(".status").innerText;
        if (id ==="all-filter-btn")
       {
        card.style.display="flex";
       }
        if (id ==="interview-filter-btn")
       {
    card.style.display = (status ==="Interview") ? "flex" : "none";
       }
        if (id ==="rejected-filter-btn")
        {
        card.style.display = (status ==="Rejected") ? "flex" : "none";
       }
    });

}
