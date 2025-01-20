"use strict";

const button = document.getElementById("btn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const container = document.querySelector(".advice-container");
const mainContainer = document.querySelector(".conainer");

fetchAdice();

async function fetchAdice() {
  const URL = "https://api.adviceslip.com/advice";
  mainContainer.classList.add("load");
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data.  Status: ${response.status}`);
    }

    const data = await response.json();
    mainContainer.classList.remove("load");
    displayData(data.slip);
  } catch (error) {
    loading.classList.add("error");
    loading.textContent = error;
  }
}

function displayData({ advice, id }) {
  const dataId = document.getElementById("data-id");
  const adviceText = document.getElementById("advice");
  dataId.textContent = id;
  adviceText.textContent = advice;
}

button.addEventListener("click", function () {
  fetchAdice();
});
