const quotes = [
    {
        index: 1,
        text: "Nothing is impossible, the word itself says ‘I’m possible.",
        author: "Audrey Hepburn",
        year: 1950
    },
    {
        index: 2,
        text: "I can’t tell you how many times I’ve been given a no, only to find that a better, brighter, bigger yes was right around the corner.",
        author: "Arlan Hamilton",
        year: 2015
    },
    {
        index: 3,
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford",
        year: 1930
    },
    {
        index: 4,
        text: "You cannot always control what goes on outside. But you can always control what goes on inside.",
        author: "Wayne Dyer",
        year: 1990
    },
    {
        index: 5,
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        year: -300
    },
    {
        index: 6,
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
        year: 1975
    },
    {
        index: 7,
        text: "Hustle beats talent when talent doesn’t hustle.",
        author: "Ross Simmonds",
        year: 2020
    },
    {
        index: 8,
        text: "If you’re going through hell, keep going.",
        author: "Unknown",
        year: 1955
    },
    {
        index: 9,
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
        year: 1940
    },
    {
        index: 10,
        text: "Everything you’ve ever wanted is sitting on the other side of fear.",
        author: "George Addair",
        year: 1960
    },
    {
        index: 11,
        text: "The question isn’t who is going to let me; it’s who is going to stop me.",
        author: "Ayn Rand",
        year: 1943
    },
    {
        index: 12,
        text: "Every strike brings me closer to the next home run.",
        author: "Babe Ruth",
        year: 1920
    },
    {
        index: 13,
        text: "I have not failed. I’ve just found 10,000 ways that won’t work.",
        author: "Thomas Edison",
        year: 1921
    },
    {
        index: 14,
        text: "Don’t worry about failure; you only have to be right once.",
        author: "Drew Houston",
        year: 2010
    },
    {
        index: 15,
        text: "You carry the passport to your own happiness.",
        author: "Diane Von Furstenberg",
        year: 2000
    },
    {
        index: 16,
        text: "Never let success get to your head, and never let failure get to your heart.",
        author: "Drake",
        year: 2013
    },
    {
        index: 17,
        text: "Ideation without execution is delusion.",
        author: "Robin Sharma",
        year: 2005
    },
    {
        index: 18,
        text: "The two most important days in your life are the day you’re born and the day you find out why.",
        author: "Mark Twain",
        year: 1890
    },
    {
        index: 19,
        text: "Nothing ever goes away until it teaches us what we need to know.",
        author: "Pema Chödrön",
        year: 1994
    },
    {
        index: 20,
        text: "We can see through others only when we can see through ourselves.",
        author: "Bruce Lee",
        year: 1971
    },
    {
        index: 21,
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        year: 1890
    },
    {
        index: 22,
        text: "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt.",
        author: "William W. Purkey",
        year: 1980
    },
    {
        index: 23,
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        year: 1940
    },
    {
        index: 24,
        text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr.",
        year: 1963
    },
    {
        index: 25,
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
        year: 1931
    },
    {
        index: 26,
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
        year: 1999
    },
    {
        index: 27,
        text: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
        year: 1889
    },
    {
        index: 28,
        text: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe",
        year: 1955
    },
    {
        index: 29,
        text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein",
        year: 1922
    },
    {
        index: 30,
        text: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar Wilde",
        year: 1892
    },
    {
        index: 31,
        text: "Life is about making an impact, not making an income.",
        author: "Kevin Kruse",
        year: 2010
    },
    {
        index: 32,
        text: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
        year: 1937
    },
    {
        index: 33,
        text: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller",
        year: 1920
    },
    {
        index: 34,
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
        year: 1801
    },
    {
        index: 35,
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        year: 1941
    },
    {
        index: 36,
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        year: 1930
    },
    {
        index: 37,
        text: "Don’t be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you.",
        author: "Zig Ziglar",
        year: 1985
    },
    {
        index: 38,
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        year: 1854
    },
    {
        index: 39,
        text: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
        year: 1957
    },
    {
        index: 40,
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell",
        year: 1995
    },
    {
        index: 41,
        text: "Everything comes to him who hustles while he waits.",
        author: "Thomas Edison",
        year: 1903
    },
    {
        index: 42,
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        year: 1994
    },
    {
        index: 43,
        text: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
        year: 1997
    },
    {
        index: 44,
        text: "If you can do your best and be happy, you are further along in life than most people.",
        author: "Leonardo DiCaprio",
        year: 2016
    },
    {
        index: 45,
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        year: 1945
    },
    {
        index: 46,
        text: "Don’t just get involved. Fight for your seat at the table.",
        author: "Barack Obama",
        year: 2012
    },
    {
        index: 47,
        text: "If you want to fly, give up everything that weighs you down.",
        author: "Buddha",
        year: -500
    },
    {
        index: 48,
        text: "It is never too late to be what you might have been.",
        author: "George Eliot",
        year: 1869
    },
    {
        index: 49,
        text: "You don’t need to see the whole staircase, just take the first step.",
        author: "Martin Luther King Jr.",
        year: 1962
    },
    {
        index: 50,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        year: 1901
    }
];

export default quotes;