const mythItems = document.querySelectorAll('.mythitem')

   
const truthElement = document.getElementById('truth')


const mythTruths = {
    "You should always wash your hands with hot water to kill germs.": "Cold or lukewarm water is just as effective as hot water in cleaning your hands. The key is to wash thoroughly for at least 20 seconds with soap.",
    "You need to wash your hair every day for it to stay clean.": "Washing your hair every day can strip it of its natural oils. Most people only need to wash their hair 2-3 times a week, depending on hair type.",
    "Antiperspirants cause breast cancer.": "There is no scientific evidence that links the use of antiperspirants with breast cancer. The claim is based on misunderstandings about the chemicals used in these products.",
    "You can get a cold by going outside with wet hair.": "Colds are caused by viruses, not by being cold or having wet hair. However, being exposed to cold weather may weaken your immune system, making you more susceptible to illness.",
    "Showering twice a day is necessary to stay clean.": "Showering twice a day may be unnecessary and can even dry out your skin. Showering once a day or a few times a week is sufficient for most people, depending on their activity level.",
    "Hand dryers are better than paper towels at killing germs.": "Studies have shown that paper towels are more effective at removing germs and bacteria than hand dryers, as they physically wipe away bacteria."
}


mythItems.forEach(item => {
    item.addEventListener('click', function() {
        const mythText = item.textContent.trim()
        const truth = mythTruths[mythText];
        truthElement.textContent = truth
    })
})

