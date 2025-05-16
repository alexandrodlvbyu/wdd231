document.addEventListener("DOMContentLoaded", () => {
    const lastMod = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastMod}`;
  });
  