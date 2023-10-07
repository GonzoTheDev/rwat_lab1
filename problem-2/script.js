let selectedColor = '#ffcccb';

function changeColor(color) {
    selectedColor = color;
}

function addNote() {
    const notesContainer = document.getElementById('notes-container');

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = selectedColor;

    const textAreaContainer = document.createElement('div');
    textAreaContainer.className = 'editable';

    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Enter your note...';
    textAreaContainer.appendChild(textArea);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'note-buttons';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = function () {
        notesContainer.removeChild(note);
    };

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.onclick = function () {
        const isEditable = textArea.readOnly;
        textArea.readOnly = !isEditable;

        if (!isEditable) {
            textAreaContainer.removeChild(textArea);
        } else {
            textAreaContainer.appendChild(textArea);
        }
    };

    buttonsContainer.appendChild(deleteBtn);
    buttonsContainer.appendChild(editBtn);

    note.appendChild(textAreaContainer);
    note.appendChild(buttonsContainer);

    notesContainer.appendChild(note);
}