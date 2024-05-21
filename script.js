const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".fact-button");
const form = document.querySelector(".factForms");
const factsList = document.querySelector(".facts-list");
// we can display the dom element in the console using console.dir(DOM Element)

// Create DOM elements: Render facts in List
factsList.innerHTML = " ";
// Load data from the intialFactsArray provided above
//createFactsList(initialFacts);

// Load Data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://uoyqfgpspuinmteldjbs.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey: "",
        authorization: "",
      },
    }
  );
  const data = await res.json();

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
          <p> ${fact.text}
              <a
                  class="source"
                  href= ${fact.source}
                  target="_blank"
              >(Source)</a>
          </p>
          <span class="tag" style="background-color: ${
            CATEGORIES.find((cat) => cat.name === fact.category).color
          }"
              >${fact.category}</span
                    ></li>`
  );
  factsList.insertAdjacentHTML("afterbegin", htmlArray);
}

// Add button function to display form on click operation
// Toggle Form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

const times = [-1, -2, 1, 2, 3, 4].find((el) => el > 0);
console.log(times);
