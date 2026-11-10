
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");

// ADD STUDENT
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student information
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const section = document.getElementById("section").value;

    // Combine full name
    const fullName = [
        firstName,
        middleName,
        lastName
    ]
    .filter(name => name.trim() !== "")
    .join(" ");

    // Remove empty message
    if (studentTable.querySelector(".empty")) {
        studentTable.innerHTML = "";
    }

    // Create new table row
    const newRow = document.createElement("tr");

    // Student information
    const values = [
        fullName,
        email,
        course,
        year,
        section
    ];

    // Create table cells
    values.forEach(function(value) {

        const cell = document.createElement("td");

        cell.textContent = value;

        newRow.appendChild(cell);

    });

    // Create action cell
    const actionCell = document.createElement("td");

    // Create Remove button
    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.className = "remove-btn";

    // REMOVE STUDENT
    removeButton.addEventListener("click", function() {

        const confirmRemove = confirm(
            "Are you sure you want to remove this student?"
        );

        if (confirmRemove) {

            // Remove selected student
            newRow.remove();

            // Check if table is empty
            if (studentTable.children.length === 0) {

                studentTable.innerHTML = `
                    <tr>
                        <td colspan="6" class="empty">
                            No Students registered yet.
                        </td>
                    </tr>
                `;

            }

        }

    });

    // Add button to action cell
    actionCell.appendChild(removeButton);

    // Add action cell to row
    newRow.appendChild(actionCell);

    // Add row to table
    studentTable.appendChild(newRow);

    // Clear form after adding
    studentForm.reset();

});
