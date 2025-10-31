const quizeform = document.querySelector("form");

const answer = {
    q1: "New Delhi",
    q2: "Tiger",
    q3: "Jawaharlal Nehru",
    q4: "Ganga",
    q5: "Peacock"
}

quizeform.addEventListener("submit", (e) => {
    e.preventDefault();  // prevent form submission

    const data = new FormData(quizeform);
    let finalscore = 0;

    for (let [name, value] of data.entries()) {
        // Trim and match case-insensitively
        if (answer[name].toLowerCase() === value.trim().toLowerCase()) {
            finalscore++;
        }
    }

    document.getElementById("out").textContent = `Your Score is: ${finalscore} out of 5`;
    quizeform.reset();
});
