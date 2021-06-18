const database = firebase.database();




btnEncender.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/Sensores').set({
        sensor1: 0
    });
});

btnApagar.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/Sensores').set({
        sensor1: 1
    });
});