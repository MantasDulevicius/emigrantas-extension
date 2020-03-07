import React from 'react'

const controls = () => {
    
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
}

export default controls;