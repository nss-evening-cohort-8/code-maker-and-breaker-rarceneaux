let convertToSecret = document.getElementById('hideWords');

document.getElementById('hideWords').addEventListener ('click', (event) => {
    hide();
});

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
    }

const inputWords = document.getElementById('userInputBox');

const hide = () => {
    let finalHide = "";
    const whatever = userInputBox.value;
    const words = whatever.split('');
    for (i =0; i<words.length;i++){
        finalHide+= words[i].charCodeAt()+ ', ';
    }
    printToDom(finalHide,'number')
};

