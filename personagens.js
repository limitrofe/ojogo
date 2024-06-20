function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    showCharacter(1, modalId); // Exibe o primeiro item ao abrir o modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function showCharacter(characterId, modalId) {
    let characters = document.querySelectorAll(`#${modalId} .character-detail`);
    characters.forEach(char => char.style.display = 'none');
    let target = document.getElementById(`${modalId}-char${characterId}`);
    if (target) {
        target.style.display = 'block';
        updateNavigationButtons(modalId, characterId);
    }
}

function nextCharacter(modalId) {
    let current = document.querySelector(`#${modalId} .character-detail:not([style*="display: none"])`);
    let currentId = parseInt(current.id.split('char').pop());
    showCharacter(currentId + 1, modalId);
}

function previousCharacter(modalId) {
    let current = document.querySelector(`#${modalId} .character-detail:not([style*="display: none"])`);
    let currentId = parseInt(current.id.split('char').pop());
    showCharacter(currentId - 1, modalId);
}

function updateNavigationButtons(modalId, characterId) {
    let previousButton = document.querySelector(`#${modalId} #previous-button`);
    let nextButton = document.querySelector(`#${modalId} #next-button`);
    
    previousButton.disabled = (characterId <= 1);
    nextButton.disabled = !document.getElementById(`${modalId}-char${characterId + 1}`);
}

window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}