import React from 'react';

export default [
    {
        step: 0,
        title: "Hey guys!",
        description: [
            <p key={0}>So I’m planning to produce limoncello, in case any of you is interested,</p>,
            <p key={1}>The lemons arrived from Calabria, they are biologic,  this means that the peel is edible: it is not treated with any product and therefore possible to eat.</p>,
            <p key={2}>This is an important part since the limoncello is made out of the alcohol penetration in the porous part of the peel (favedo), which unleashes the lemon’s essential oils.</p>
        ],
        isNextButton:true,
        isPreviousButton: true
    },
    {
        step: 1,
        title: "Why exactly theeeese lemons?",
        description: [
            <p key={0}>The particularity of the lemons I bought is that they are low in acidity, there are in fact 2 factors that can deteriorate the essential oils: time and acidity. Acidity can be increased by the type of lemon and the amount of light (hence why a low acid lemon is needed).</p>,
            <p key={1}> About the time, it just passes :).</p>,
            // <p>In my experience, based on the amount of peel used, the taste of the limoncello will also change. A good commercial limoncello uses around 7 lemons per litre of alcohol, a good compromise is 10-12. I plan to use 15.</p>,
        ],
        gif: "https://i.giphy.com/media/gw3EWhkxeadcBE7S/source.gif",
        extra: [
            <p key={0} className={"note"}>The lemon will be peeled by hand (of course I don’t own a machine), this gives the possibility to lower the bitterness (the white part is bitter, while the yellow one isn’t) and gives a good taste with low sugar.</p>
        ],
        isNextButton: true,
        isPreviousButton: true,
    },
    {
        step: 2,
        title: "Infusion",
        description: [
            <p key={0}>The amount of time that the lemon stays in immersion in the alcohol is highly variable.</p>,
            <p key={1}>Old traditions says between a week and 40 days.</p>,
            <p key={2}>Science says 3 days, so there is a bit of debate here (yes, there is  
                a <a href="https://www.semanticscholar.org/paper/Examination-of-the-lemon-peel-maceration-step-in-of-Nota-Naviglio/0f2219cef76173806553436ab5aa689dcba0cd35?p2df" target="_blank">scientific paper</a> on the matter)</p>,
        ],
        gif: "https://media4.giphy.com/media/z6ccg9ZZzWT2E/giphy.gif?cid=ecf05e47w4prmg96brethr2ke7gle5cuhm79cl4l97mw102p&rid=giphy.gif",
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 3,
        title: "How many days of infusion?",
        description: [],
        extra: [
            <p key={0} className={"note"}>I usually do something between 2 weeks and a month, holistically my best limoncello was a 40 days one, I believe that some of the oils started to degrade providing a more delicate taste.</p>
        ],
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 4,
        title: "Alcoholic Grade",
        description: [
            <p key={0}>After the maceration, the mix is filtered and added with highly sugar-dense water. More water, less alcohol concentration. I am not a strong limoncello fan, but hey, I won’t judge!</p>,
        ],
        gif: "https://media2.giphy.com/media/lTGLOH7ml3poQ6JoFg/giphy.gif?cid=ecf05e472gnms17nus6xtropkx3djup5ggbcsbr0dtjoe9zq&rid=giphy.gif",
        extra: [
            <p key={1}>Water proportion is somewhere between 1,20 to 1,5 l. per litre of alcohol.</p>
        ],
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 5,
        title: "Choose your preferred alcoholic grade",
        description: [],
        extra: [
            <p key={0} className={"note"}>I usually do something between 2 weeks and a month, holistically my best limoncello was a 40 days one, I believe that some of the oils started to degrade providing a more delicate taste.</p>
        ],
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 6,
        title: "And what about sugar?",
        description:[
            <p key={0}>This will strongly characterise your limoncello, being somewhere between 400 and 800 gr. Of course it goes along with water added, so to target the same sugar concentration at different alcoholic grade, you might need same amount of sugar.</p>
        ],
        gif: "https://media0.giphy.com/media/xThtachfTCyKWzDmik/giphy.gif?cid=ecf05e47k1do0t3tohjaeqefh961jjktsoo1ynm408ftb1t5&rid=giphy.gif",
        extra: [
            <p key={0} className={"note"}>As an example, a highly alcoholic limoncello that requires 400gr of sugar
            Will have same sugar concentration of a low alcoholic limoncello with 600gr of sugar. </p>,
            
            <p key={1} className={"note"}>This is kind of indicative as more sugar makes your body perceive less alcohol, so you see why is cool to customise your limoncello :).</p>
        ],
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 7,
        title: "Choose the sugar amount",
        description: [],
        extra: [
        ],
        isNextButton: true,
        isPreviousButton: true
    },
    {
        step: 8,
        title: "Work is done!",
        description: [
            <p key={0}>The price of one bottle is 23€ <span className={"note"}>(+2€ deposit per bottle)</span>.</p>,
            
        ],
        extra: [
            <p key={0}><b>Note:</b> Bottle size is 1 litre (instead that canonical 0.75 litre)</p>
        ],
        isNextButton: false,
        isPreviousButton: true
    }
]