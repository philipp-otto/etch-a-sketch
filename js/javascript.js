function createBlock(sideLengthBlock, borderSizeBlock) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.classList.add('singleBlock');
    block.style.cssText = `border: ${borderSizeBlock}px solid gray; width: ${sideLengthBlock-2*borderSizeBlock}px; height: ${sideLengthBlock-2*borderSizeBlock}px;`;
    block.addEventListener('mouseover', changeColorOfBlock);
    container.appendChild(block);
}

function changeColorOfBlock(block) {
    block.target.style.backgroundColor = 'black';
    console.log('Hovering');
}

function createMultipleBlocks(numberOfBlocksPerRow) {
    const sideLengthContainer = document.querySelector('.container').clientWidth;
    const sideLengthBlock = Math.floor(sideLengthContainer/numberOfBlocksPerRow);
    const numberOfNewBlocks = numberOfBlocksPerRow**2;
    for (let i = 0; i<numberOfNewBlocks; i++) {
        createBlock(sideLengthBlock, 1);
    }
}

function pressGridSizeButton() {
    const gridSizeButton = document.querySelector('.chooseGridSize');
    gridSizeButton.addEventListener('click', chooseGridSize);
}

function deleteGrid() {
    const blocks = document.querySelectorAll('.singleBlock');
    console.log('Deleting');
    blocks.forEach(block => block.remove());
}

function chooseGridSize() {
    const gridSize = Number(prompt("Choose number of blocks per row"));
    deleteGrid();
    createMultipleBlocks(gridSize);

}

createMultipleBlocks(16);
pressGridSizeButton();
