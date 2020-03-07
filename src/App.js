import React from 'react'
import './App.css'

const App = () => {

    const fEpp = () => {
        document.querySelector('#items1 > .item.active').classList.remove('active');
        document.querySelector('#items1 > #i1').classList.add('active');
        document.querySelector('#items1 > #i1 > #rec').click();
    }

    const lEpp = () => {
        document.querySelector('#items1 > .item.active').classList.remove('active');
        let existingElementsCount = document.querySelectorAll('#items1 > .item > #rec').length;
        document.querySelector('#items1 > #i' + existingElementsCount).classList.add('active');
        document.querySelector('#items1 > #i' + existingElementsCount + ' > #rec').click();
    }

    const nextD = () => {
        document.querySelector('#items1 > .item.active').classList.remove('active');
        document.querySelector('#top7 > img').click();

        setTimeout(checkIfVisible, 500);
        function checkIfVisible() {
            let displayType = document.querySelector('#items1').style.display;
            if(displayType === 'none'){
                window.setTimeout(checkIfVisible, 500);
            } else {
                document.querySelector('#i1').classList.add('active');
                document.querySelector('#i1 > #rec').click();
            }
        }
    }

    const prevD = () => {
        document.querySelector('#items1 > .item.active').classList.remove('active');
        document.querySelector('#top5 > img').click();

        setTimeout(checkIfVisible, 500);
        function checkIfVisible() {
            let displayType = document.querySelector('#items1').style.display;
            if(displayType === 'none'){
                window.setTimeout(checkIfVisible, 500);
            } else {
                document.querySelector('#i1').classList.add('active');
                document.querySelector('#i1 > #rec').click();
            }
        }
    }

    const nextE = () => {
        function channelForward() {
            document.querySelector('#top7 > img').click();
            
            setTimeout(checkIfVisible, 500);

            function checkIfVisible() {
                let displayType = document.querySelector('#items1').style.display;
                if(displayType === 'none'){
                    window.setTimeout(checkIfVisible, 500);
                } else {
                    document.querySelector('#i1').classList.add('active');
                    document.querySelector('#i1 > #rec').click();
                }
            }
        }

        let currentEppName = document.querySelector('#tvEpg1 > span').textContent.slice(0,5);
        if(currentEppName.slice(1,2) === ":"){currentEppName = '0' + currentEppName}

        let allElements = document.querySelectorAll('#items1 > .item');
        let currentEppByName;
        allElements.forEach(eppElement => {if(eppElement.childElementCount > 0){if(eppElement.querySelector('.mcp').textContent.includes(currentEppName)){currentEppByName = eppElement}}});
        let nr = currentEppByName.id.slice(1, currentEppByName.id.length);
        let nextNr = (parseInt(nr)+1).toString()

        if(document.querySelector('#i' + nr + ' > #recording') === null){
            if(document.querySelector('#i' + nextNr + ' > #uploading') === null && document.querySelector('#i' + nextNr + ' > #recording') === null){

                document.querySelector('#items1 > .active').classList.remove('active');
                let i=0;
                let existingElements = document.querySelectorAll('#items1 > .item');
                existingElements.forEach(element => {if(element.hasChildNodes()){i++}});

                if(nr == i) {
                    channelForward();
                } else {

                    while(document.querySelector('#i' + nextNr + '> #rec') === null) {
                        nextNr = (parseInt(nextNr)+1).toString();
                    };
                    document.querySelector('#i' + nextNr).classList.add('active');
                    document.querySelector('#i' + nextNr + '> #rec').click();
                }
            }
        }

    }

    const prevE = () => {
        function channelBack() {
            document.querySelector('#top5 > img').click();
            
            setTimeout(checkIfVisible, 500);

            function checkIfVisible() {
                let displayType = document.querySelector('#items1').style.display;
                if(displayType === 'none'){
                    window.setTimeout(checkIfVisible, 500);
                } else {
                    let i=0;
                    let existingElements = document.querySelectorAll('#items1 > .item');
                    existingElements.forEach(element => {if(element.hasChildNodes()){i++}});
                    document.querySelector('#i' + i).classList.add('active');
                    document.querySelector('#i' + i + '>#rec').click();
                }
            }
        }

        let currentEppName = document.querySelector('#tvEpg1 > span').textContent.slice(0,5);
        if(currentEppName.slice(1,2) === ":"){currentEppName = '0' + currentEppName}

        let allElements = document.querySelectorAll('#items1 > .item');
        let currentEppByName;
        allElements.forEach(eppElement => {if(eppElement.childElementCount > 0){if(eppElement.querySelector('.mcp').textContent.includes(currentEppName)){currentEppByName = eppElement}}});
        let nr = currentEppByName.id.slice(1, currentEppByName.id.length);
        document.querySelector('#items1 > .active').classList.remove('active');

        if(nr == 1) {
            channelBack();
        } else {
            let prevNr = (parseInt(nr)-1).toString()

            while(document.querySelector('#i' + prevNr + '> #rec') === null) {
                prevNr = (parseInt(prevNr)-1).toString();
            };

            document.querySelector('#i' + prevNr).classList.add('active');
            document.querySelector('#i' + prevNr + '> #rec').click();
        }
    }

    const playPause = () => {
        document.querySelector('.vjs-play-control').click();
    }

    const fullScreen = () => {
        document.querySelector('.vjs-fullscreen-control').click();
    }

    const skip30 = () => {
        document.querySelector('.skip-forward').click();
    }

    const back10 = () => {
        document.querySelector('.skip-back').click();
    }

    const mute = () => {
        document.querySelector('.vjs-volume-menu-button').click();
    }

    const tv3 = () => {
        document.querySelector('img[title="TV3 HD"]').parentElement.click();
    }
    const lnk = () => {
        document.querySelector('img[title="LNK HQ"]').parentElement.click();
    }
    const lrt = () => {
        document.querySelector('img[title="LRT HD"]').parentElement.click();
    }
    const btv = () => {
        document.querySelector('img[title="BTV HQ"]').parentElement.click();
    }
    const tv6 = () => {
        document.querySelector('img[title="TV6 HD"]').parentElement.click();
    }


    window.addEventListener('keyup', (e) => {
        let keyCode = e.keyCode
        if(keyCode == 37) {
            prevE();
        } else if(keyCode == 39) {
            nextE();
        } else if(e.ctrlKey && e.altKey && keyCode == 81) {
            prevD();
        } else if(e.ctrlKey && e.altKey && keyCode == 69) {
            nextD();
        } else if(e.ctrlKey && e.altKey && keyCode == 87) {
            fEpp();
        } else if(e.ctrlKey && e.altKey && keyCode == 83) {
            lEpp();
        } else if(keyCode == 32) {
            playPause();
        } else if(e.ctrlKey && e.shiftKey && keyCode == 70) {
            fullScreen();
        } else if(e.ctrlKey && e.altKey && keyCode == 67) {
            skip30();
        } else if(e.ctrlKey && e.altKey && keyCode == 90) {
            back10();
        } else if(e.ctrlKey && e.altKey && keyCode == 77) {
            mute();
        } else if(e.ctrlKey && e.altKey && keyCode == 112) {
            tv3();
        } else if(e.ctrlKey && e.altKey && keyCode == 113) {
            lnk();
        } else if(e.ctrlKey && e.altKey && keyCode == 114) {
            lrt();
        } else if(e.ctrlKey && e.altKey && keyCode == 115) {
            btv();
        } else if(e.ctrlKey && e.altKey && keyCode == 116) {
            tv6();
        }
    });

    return (
        <div id="control-panel" >
            <button onClick={prevD} className="prevD" title="Vakarykštė diena"></button>
            <button onClick={prevE} className="prevE" title="Buvusi atgal"></button>
            <button onClick={fEpp} className="fEpp" title="Pirma laida"></button>
            <button onClick={lEpp} className="lEpp" title="Paskutinė laida"></button>
            <button onClick={nextE} className="nextE" title="Sekanti laida"></button>
            <button onClick={nextD} className="nextD" title="Sekanti diena"></button>
        </div>
    )

}

export default App;
