const motivationalQuotes = [{
    quote :"The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disny"
}, {
    quote : "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
    author: "Unknown"
}, {
    quote : "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
    author: "Vince Lombardi"
}, {
    quote : "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
    author: "Steve Jobs"
}, {
    quote : "We May Encounter Many Defeats But We Must Not Be Defeated.",
    author: "Maya Angelou"
}, {
    quote : "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    author: "Johann Wolfgang Von Goethe"
}, {
    quote : "We Generate Fears While We Sit. We Overcome Them By Action.",
    author: "Dr. Henry Link"
}, {
    quote : "Whether You Think You Can Or Think You Can’t, You’re Right.",
    author: "Henry Ford"
}, {
    quote : "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
    author: "Hasidic Proverb"
}, {
    quote : "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
    author: "Franklin D. Roosevelt"
}, {
    quote : "Creativity Is Intelligence Having Fun.",
    author: "Albert Einstein"
}, {
    quote : "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
    author: "Don Zimmer"
}, {
    quote : "Do What You Can With All You Have, Wherever You Are.”",
    author: "Theodore Roosevelt"
}, {
    quote : "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
    author: "C.S. Lewis"
}, {
    quote : "Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
    author: "John Wooden"
}, {
    quote : "Today’s Accomplishments Were Yesterday’s Impossibilities.",
    author: "Robert H. Schuller"
}, {
    quote : "You Don’t Have To Be Great To Start, But You Have To Start To Be Great.",
    author: "Zig Ziglar"
}, {
    quote : "Leadership Is The Ability To Get Extraordinary Achievement From Ordinary People",
    author: "Brain Tracy"
}, {
    quote : "Life is about making an impact, not making an income.",
    author: "Kevin Kruse"
}, {
    quote : "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
}, {
    quote : "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
}, {
    quote : "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
}, {
    quote : "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse"
}, {
    quote : "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll"
}, {
    quote : "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi"
}, {
    quote : "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
}, {
    quote : "To live a creative life, we must lose our fear of being wrong.",
    author: "Anonymous"
}, {
    quote : "If you are not willing to risk the usual you will have to settle for the ordinary.",
    author: "Jim Rohn"
}, {
    quote : "Trust because you are willing to accept the risk, not because it's safe or certain.",
    author: "Anonymous"
}, {
    quote : "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth"
}, {
    quote : "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.",
    author: "William W. Purkey"
}, {
    quote : "The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.",
    author: "Unknown"
}, {
    quote : "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    author: "Unknown"
}, {
    quote : "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
}, {
    quote : "One day or day one. You decide.",
    author: "Unknown"
}, {
    quote : "When life gives you Monday, dip it in glitter and sparkle all day.",
    author: "Ella Woodword"
}, {
    quote : "Greatness only comes before hustle in the dictionary.",
    author: "Ross Simmonds"
}, {
    quote : "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg"
}, {
    quote : "The hard days are what make you stronger.",
    author: ""
}, {
    quote : "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
}, {
    quote : "The only difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson"
}, {
    quote : "Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be.",
    author: "Benjamin Hardy"
}, {
    quote : "Never stop doing your best just because someone doesn’t give you credit.",
    author: "Kamari aka Lyrikal"
}, {
    quote : "Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.",
    author: "Christine Caine"
}, {
    quote : "Don’t limit your challenges. Challenge your limits.",
    author: "Unknown"
}, {
    quote : "Whenever you find yourself doubting how far you can go, just remember how far you have come.",
    author: "Unknown"
}, {
    quote : "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
}, {
    quote : "Go the extra mile. It’s never crowded there.",
    author: "Dr. Wayne D. Dyer"
}, {
    quote : "If you obey all the rules, you miss all the fun.",
    author: "Katharine Hepburn"
}, {
    quote : "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem"
}, {
    quote : "Focus on being productive instead of busy.",
    author: "Tim Ferriss"
}, {
    quote : "You never know what you can do until you try.",
    author: "William Cobbett"
}, {
    quote : "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
},

]

function getQuote(o) {
    const result = Math.floor(Math.random() * o.length);
    return `${o[result].quote} \nBy ${o[result].author}`;
}

console.log(getQuote(motivationalQuotes));