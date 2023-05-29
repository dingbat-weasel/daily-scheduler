$(function () {
  const now = dayjs();

  const displayDate = function () {
    document.querySelector("#currentDay").textContent =
      now.format("dddd, DD MMMM YYYY");
  };
  displayDate();

  const styleHours = function () {
    const hour = now.hour();

    for (let i = 0; i <= 23; i++) {
      let hourEl = document.getElementById(i);

      hourEl.querySelector(".description").value = localStorage.getItem(i);

      if (i === hour) {
        hourEl.classList.add("present");
      } else if (i < hour) {
        hourEl.classList.add("past");
      } else {
        hourEl.classList.add("future");
      }
    }
  };
  styleHours();

  const saveInput = function () {
    const saveBtns = document.querySelectorAll(".saveBtn");
    saveBtns.forEach((btn) => {
      btn.addEventListener("click", function handleClick(e) {
        const inputHourId = e.target.parentElement.id;
        const inputText =
          e.target.parentElement.querySelector(".description").value;

        localStorage.setItem(inputHourId, inputText);
      });
    });
  };
  saveInput();
});
