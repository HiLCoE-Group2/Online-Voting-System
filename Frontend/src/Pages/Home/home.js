export const checkVotingTime = (setVoteMsg, setBtnDisabled, loadResults) => {
  const now = new Date();

  const startTime = new Date();
  startTime.setHours(12, 0, 0, 0);

  const endTime = new Date();
  endTime.setHours(16, 0, 0, 0);

  if (now >= startTime && now <= endTime) {
    setBtnDisabled(false);
    setVoteMsg(`Voting is still continuing, please wait until ${endTime.toLocaleTimeString()}`);
  } else if (now > endTime) {
    setBtnDisabled(false);
    setVoteMsg("Voting ended. Results are available.");
    if (loadResults) loadResults();
  } else {
    setBtnDisabled(true);
    setVoteMsg("Voting has not started yet.");
  }
};

export const initToggleAside = () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const aside = document.getElementById("result");

  if (!toggleBtn || !aside) {
    console.warn("Toggle elements not found yet");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    aside.classList.toggle("active");

    if (aside.classList.contains("active")) {
      toggleBtn.textContent = "❯";
      toggleBtn.classList.add("hidden");
      setTimeout(() => {
        toggleBtn.style.right = "100%";
        toggleBtn.classList.remove("hidden");
      }, 500);
    } else {
      toggleBtn.textContent = "❮";
      toggleBtn.style.right = "0";
    }
  });
};

