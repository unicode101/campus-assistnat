(() => {
  const input = document.getElementById("resource-search");
  const cards = Array.from(document.querySelectorAll(".resource-card"));
  const count = document.getElementById("results-count");
  const emptyState = document.getElementById("empty-state");
  const clearButton = document.getElementById("clear-search");
  const showAllButton = document.querySelector(".empty-clear");

  function filterResources() {
    const query = input.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const searchableText = `${card.querySelector("h3").textContent} ${card.querySelector("p").textContent} ${card.dataset.search}`.toLocaleLowerCase();
      const isMatch = !query || searchableText.includes(query);
      card.hidden = !isMatch;
      if (isMatch) visibleCount += 1;
    });

    count.textContent = `${visibleCount} ${visibleCount === 1 ? "resource" : "resources"}`;
    emptyState.hidden = visibleCount !== 0;
    clearButton.hidden = query.length === 0;
  }

  input.addEventListener("input", filterResources);
  clearButton.addEventListener("click", () => {
    input.value = "";
    filterResources();
    input.focus();
  });
  showAllButton.addEventListener("click", () => {
    input.value = "";
    filterResources();
    input.focus();
  });

  document.querySelectorAll(".learn-link").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
})();
