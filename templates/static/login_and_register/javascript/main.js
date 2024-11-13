/**
 * ### Função altera a posição do elemento information-content usando a troca de classe para isso.
 * 
 * 
 * @param {HTMLElement} informationContent 
 * @return {void}
 */
function informationPositionToggle(informationContent) {
    informationContent.classList.toggle('info-pos-left')
}


/**
 * @return void
 */
function main() {
    const informationContent = document.getElementById('information-content-slid');
    const buttons = document.getElementsByClassName('button-toggle-information');

    // adicionar um eventListener em todos os botoes centrados pelo getElementByClassName
    for (let i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', () => {
            informationPositionToggle(informationContent);
        });
    }
}


main()