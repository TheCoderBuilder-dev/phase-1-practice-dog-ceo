console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
  // Challenge 1: Fetch and Display Dog Images
  fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById("dog-image-container");
          data.message.forEach(imgSrc => {
              const img = document.createElement("img");
              img.src = imgSrc;
              img.style.width = "200px";
              img.style.margin = "10px";
              container.appendChild(img);
          });
      });

  // Challenge 2: Fetch and Display Dog Breeds
  fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
          const breedList = document.getElementById("dog-breeds");
          Object.keys(data.message).forEach(breed => {
              const li = document.createElement("li");
              li.textContent = breed;
              breedList.appendChild(li);

              // Challenge 3: Change Color on Click
              li.addEventListener("click", () => {
                  li.style.color = "blue"; // Change to any color you like
              });
          });
      });

  // Challenge 4: Filter Breeds by Letter
  document.getElementById("breed-dropdown").addEventListener("change", function(event) {
      const selectedLetter = event.target.value;
      const breedList = document.getElementById("dog-breeds");
      breedList.innerHTML = ""; // Clear previous breeds

      fetch(breedUrl)
          .then(response => response.json())
          .then(data => {
              Object.keys(data.message).forEach(breed => {
                  if (breed.startsWith(selectedLetter)) {
                      const li = document.createElement("li");
                      li.textContent = breed;
                      breedList.appendChild(li);
                      
                      // Keep color-changing functionality
                      li.addEventListener("click", () => {
                          li.style.color = "blue";
                      });
                  }
              });
          });
  });
});

