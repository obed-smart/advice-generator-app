"use strict";

const button = document.getElementById("btn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const container = document.querySelector(".advice-container");
const mainContainer = document.querySelector(".conainer");
const category = document.getElementById("category");

fetchAdice();

async function fetchAdice() {
  loading.classList.remove("error");
  loading.textContent = "Loading";

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

async function fetchAdiceBYSpecification() {
  loading.classList.remove("error");
  loading.textContent = "Loading";

  const URL = "https://6749c1828680202966327f1c.mockapi.io/quotes-api";
  mainContainer.classList.add("load");

  const id = Math.floor(Math.random() * 21);
  const option = category.value;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data.  Status: ${response.status}`);
    }

    const data = await response.json();
    mainContainer.classList.remove("load");
    // console.log(data[0][option][id]);
    displayData(data[0][option][id]);
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
  const option = category.value;

  if (option === "Random") fetchAdice();

  if (option !== "Random") fetchAdiceBYSpecification();
});
category.addEventListener("change", (e) => {
  if (e.target.value === "Random") fetchAdice();
  fetchAdiceBYSpecification();
});
