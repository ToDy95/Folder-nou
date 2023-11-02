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
    try { // incerc sa fac un call de DB
      const dataApi = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch ( chem datele dintr-un API (dintr-o baza de date))

      const data = await dataApi.json(); // parsez datele adica dintr-un set de date criptat il fac Array de obiecte [{obj1}, {obj2}]
      let randomColor;
      data.map((item) => { // parsez toate datele si imi fac un callback sa am acces la ele (ITEM)
        console.log(item) // vad in consola ce date am
        randomColor = getRandomHexColor(); // o functie care imi da un numar random de culoare (10 in cazul nostru)
        const newRow = document.createElement("tr"); // creez un TR NOU pentru fiecare obiect din array-ul nostru din DATA
        const name = document.createElement("td"); // creez TD -uri pentru fiecare valoare care se regaseste in capul de tabel
        const UserName = document.createElement("td");
        const Email = document.createElement("td");
        const Phone = document.createElement("td");
        const webSiteCell = document.createElement("td");
        const Street = document.createElement("td");
        // creez TD -uri pentru fiecare valoare care se regaseste in capul de tabel

        //random color pentru fiecare rand
        newRow.style.background = randomColor;
        newRow.id = item.id // atribui un id fiecarui rand


        name.textContent = item.name; // scriu in fiecare TD ce-mi doresc sa afisez in ecran
        UserName.textContent = item.username;
        Email.textContent = item.email;
        Phone.textContent = item.phone;
        webSiteCell.textContent = item.website;
        Street.textContent = item.address.street;

        // scriu in fiecare TD ce-mi doresc sa afisez in ecran
        newRow.appendChild(name); // atribui valoare TD-urilor fiecarui rand AFERENT
        newRow.appendChild(UserName);
        newRow.appendChild(Email);
        newRow.appendChild(Phone);
        newRow.appendChild(webSiteCell);
        newRow.appendChild(Street)

        myTable.appendChild(newRow); // atribui randul catre tabell meu  de pe linia 20
      });
    } catch (error) { // in caz ca ceva merge nasol
      console.error("Eroare:", error); // erroare => show error message
    }
  }

  fetchData(); // apelez functia care-mi face apel de db + construieste tabelul
});
