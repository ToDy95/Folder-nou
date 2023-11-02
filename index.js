document.addEventListener("DOMContentLoaded", function () {

  async function fetchData() {
    function getRandomHexColor() {
      // Generate random values for R, G, and B components
      const r = Math.floor(Math.random() * 256); // 0 to 255
      const g = Math.floor(Math.random() * 256); // 0 to 255
      const b = Math.floor(Math.random() * 256); // 0 to 255

      // Convert the values to hexadecimal format
      const hexR = r.toString(16).padStart(2, '0'); // Ensure two digits
      const hexG = g.toString(16).padStart(2, '0');
      const hexB = b.toString(16).padStart(2, '0');

      // Combine the hex values to create a hex color code (e.g., "#RRGGBB")
      const hexColor = `#${hexR}${hexG}${hexB}`;

      return hexColor;
    }
    const myTable = document.getElementById("myTableBody");
    try {
      const dataApi = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await dataApi.json();
      let randomColor;
      data.map((item) => {
        console.log(item)
        randomColor = getRandomHexColor();
        const newRow = document.createElement("tr");
        const name = document.createElement("td");
        const UserName = document.createElement("td");
        const Email = document.createElement("td");
        const Phone = document.createElement("td");
        const webSiteCell = document.createElement("td");
        const Street = document.createElement("td");
        //random color pentru fiecare rand
        newRow.style.background = randomColor;
        newRow.id = item.id


        name.textContent = item.name;
        UserName.textContent = item.username;
        Email.textContent = item.email;
        Phone.textContent = item.phone;
        webSiteCell.textContent = item.website;
        Street.textContent = item.address.street;
        newRow.appendChild(name);
        newRow.appendChild(UserName);
        newRow.appendChild(Email);
        newRow.appendChild(Phone);
        newRow.appendChild(webSiteCell);
        newRow.appendChild(Street)
        myTable.appendChild(newRow);
      });
    } catch (error) {
      console.error("Eroare:", error);
    }
  }

  fetchData();
});
