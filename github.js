document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/MatiGbbt/repos")
        .then(response => response.json())
        .then(data => {
            const reposTable = document.getElementById("github-repos");
            data.forEach(repo => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><a href="${repo.html_url}" target="_blank" style="color: #b74b4b; text-decoration: underline;">${repo.name}</a></td>
                    <td>${repo.description || "Sin descripción"}</td>
                    <td>${repo.language || "N/A"}</td>
                    <td>${new Date(repo.created_at).toLocaleDateString()}</td>
                    <td>${new Date(repo.updated_at).toLocaleDateString()}</td>
                `;
                reposTable.appendChild(row);
            });
        })
        .catch(error => console.error("Error al cargar los repositorios:", error));
});
