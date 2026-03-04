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
    checkEmpty();

}

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const cards = document.querySelectorAll(".card");

totalCount.innerText = cards.length;

let interview = 0;
let rejected = 0;

function checkEmpty() {

    const cards = document.querySelectorAll(".card");
    let visible = 0;

    cards.forEach(card => {
        if (card.style.display !== "none") {
            visible++;
        }
    });

    const empty = document.getElementById("emptyState");

    if (visible === 0) {
        empty.classList.remove("hidden");
    } else {
        empty.classList.add("hidden");
    }
}

function updateTotal() {
    totalCount.innerText = document.querySelectorAll(".card").length;
  }
updateTotal();



const card = document.querySelectorAll(".card");

cards.forEach(card => {

const interviewBtn = card.querySelector(".interview-btn");
const rejectedBtn = card.querySelector(".rejected-btn");
const statusBtn = card.querySelector(".status");
const deleteBtn = card.querySelector(".fa-trash-can");

interviewBtn.addEventListener("click", function () {

    if (statusBtn.innerText !== "Interview"){

    if (statusBtn.innerText === "Rejected") {
            rejected--;
            rejectedCount.innerText = rejected;
       }

        statusBtn.innerText = "Interview";
        statusBtn.className = "status bg-green-500 text-white px-2 py-1 rounded-lg";

        interview++;
        interviewCount.innerText = interview;

    }
});

rejectedBtn.addEventListener("click", function () {

    if (statusBtn.innerText !== "Rejected") 
        {
        if (statusBtn.innerText === "Interview") {
            interview--;
             interviewCount.innerText = interview;
        }

        statusBtn.innerText = "Rejected";
        statusBtn.className = "status bg-red-500 text-white px-2 py-1 rounded-lg";

        rejected++;
        rejectedCount.innerText = rejected;
    }

 });

 deleteBtn.addEventListener("click", function() {

    if (statusBtn.innerText === "Interview") {
        interview--;
        interviewCount.innerText = interview;
    }

    if (statusBtn.innerText === "Rejected") 
        {
            rejected--;
            rejectedCount.innerText = rejected;
        }

    card.remove();
    updateTotal();
    checkEmpty();

    totalCount.innerText = document.querySelectorAll(".card").length;

    });

});
