// otpUtils.js
export class OTPHandler {
  constructor(inputSelector = '.otp-input') {
    this.inputs = null;
    this.timerInterval = null;
    this.inputSelector = inputSelector;
  }

  initializeOTPInputs() {
    this.inputs = document.querySelectorAll(this.inputSelector);
    
    this.inputs.forEach((input, index) => {
      input.addEventListener('input', this.handleInput.bind(this, index));
      input.addEventListener('keydown', this.handleKeydown.bind(this, index));
    });
  }

  handleInput(index) {
    const input = this.inputs[index];
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
    } else {
      input.style.border = "2px solid green"; 
      if (index < this.inputs.length - 1) {
        this.inputs[index + 1].focus();
      }
    }
  }

  handleKeydown(index, e) {
    if (e.key === "ArrowLeft" && index > 0) {
      this.inputs[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < this.inputs.length - 1) {
      this.inputs[index + 1].focus();
    } else if (e.key === "Backspace" && this.inputs[index].value === "" && index > 0) {
      this.inputs[index - 1].focus();
    }
  }

  cleanup() {
    if (this.inputs) {
      this.inputs.forEach((input, index) => {
        input.removeEventListener('input', this.handleInput.bind(this, index));
        input.removeEventListener('keydown', this.handleKeydown.bind(this, index));
      });
    }
    this.clearTimer();
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  startTimer(seconds, timerDisplayId = "timer") {
    this.clearTimer();
    const timerDisplay = document.getElementById(timerDisplayId);
    if (!timerDisplay) return;

    let timeLeft = seconds;
    timerDisplay.textContent = timeLeft;

    this.timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        this.clearTimer();
        timerDisplay.textContent = "0";
      }
    }, 1000);
  }

  showPanel(panelId, autoStartTimer = false, timerSeconds = 60) {
    document.querySelectorAll('.panell').forEach(panel => panel.classList.remove('activee'));
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
      targetPanel.classList.add('activee');

      if (autoStartTimer && panelId === 'panel02') {
        this.startTimer(timerSeconds);
      }
    }
  }
}

// Alternative: Individual exported functions
export const initializeOTP = (inputSelector = '.otp-input') => {
  const inputs = document.querySelectorAll(inputSelector);
  const handlers = [];

  const handleInput = (index) => {
    const input = inputs[index];
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
    } else {
      input.style.border = "2px solid green"; 
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  };

  const handleKeydown = (index, e) => {
    if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else if (e.key === "Backspace" && inputs[index].value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  };

  inputs.forEach((input, index) => {
    const inputHandler = handleInput.bind(null, index);
    const keydownHandler = handleKeydown.bind(null, index);
    
    input.addEventListener('input', inputHandler);
    input.addEventListener('keydown', keydownHandler);
    
    handlers.push({ inputHandler, keydownHandler });
  });

  // Return cleanup function
  return () => {
    inputs.forEach((input, index) => {
      const handler = handlers[index];
      input.removeEventListener('input', handler.inputHandler);
      input.removeEventListener('keydown', handler.keydownHandler);
    });
  };
};

let timerInterval;

export const startTimer = (seconds, timerDisplayId = "timer") => {
  clearInterval(timerInterval);
  const timerDisplay = document.getElementById(timerDisplayId);
  if (!timerDisplay) return;

  let timeLeft = seconds;
  timerDisplay.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "0";
    }
  }, 10000);
};

export const showPanel = (panelId, autoStartTimer = false, timerSeconds = 60) => {
  document.querySelectorAll('.panell').forEach(panel => panel.classList.remove('activee'));
  const targetPanel = document.getElementById(panelId);
  if (targetPanel) {
    targetPanel.classList.add('activee');

    if (autoStartTimer && panelId === 'panel02') {
      startTimer(timerSeconds);
    }
  }
};

export const clearTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

// Default export
export default {
  OTPHandler,
  initializeOTP,
  startTimer,
  showPanel,
  clearTimer
};