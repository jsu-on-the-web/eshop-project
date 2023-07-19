import { db } from '../../config/firebase';
import {
    collection,
    getDocs,
    addDoc,
    onSnapshot,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    increment,
} from 'firebase/firestore';
import firebase from 'firebase/app';

/** Initialize Firebase */
firebase.initializeApp(db);
const firestore = firebase.firestore();

const addDocumentToFirestore = async (newDocData) => {

}

const products = [
    {
        'title': 'A Brief History Of Time',
        'author': 'Stephen Hawking',
        'qualities': [
            {
                'quality': 'new',
                'price': 21.99,
                'quantity': 4,
            },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }
        ],

        'isFavorite': false,
        'imageUrl': 'http://books.google.com/books/content?id=eUzqAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl',
        'description': "Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries? These are just some of the questions considered in an internationally acclaimed masterpiece which begins by reviewing the great theories of the cosmos from Newton to Einstein, before delving into the secrets which still lie at the heart of space and time.",
        'category': 'science'
    },
    {
        'title': 'The Infinite Monkey Cage - How to Build a Universe',
        'author': [
            "Prof. Brian Cox",
            "Robin Ince",
            "Alexandra Feachem"
        ],
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavorite': false,
        'imageUrl': 'http://books.google.com/books/content?id=n9PWDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl',
        "description": "The Infinite Monkey Cage, the legendary BBC Radio 4 programme, brings you this irreverent celebration of scientific marvels. Join us on a hectic leap through the grand and bizarre ideas conjured up by human imagination, from dark matter to consciousness via neutrinos and earthworms.",
        'category': 'science'
    },
    {
        'title': 'Crime and Punishment',
        'author': 'Fyodor Dostoevsky',
        'qualities': [
            {
                'quality': 'new',
                'price': 21.99,
                'quantity': 4,
            },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }
        ],
        'isFavourite': true,
        'imageUrl': 'http://books.google.com/books/content?id=e6OMEAAAQBAJ&printsec=frontcover&img=1&zoom=1',
        'description': "“A truly great translation . . . This English version . . . really is better.” —A. N. Wilson, The Spectator \n\n Nominated as one of America’s best-loved novels by PBS’s The Great American Read This acclaimed new translation of Dostoyevsky’s “psychological record of a crime” gives his dark masterpiece of murder and pursuit a renewed vitality, expressing its jagged, staccato urgency and fevered atmosphere as never before. Raskolnikov, a destitute and desperate former student, wanders alone through the slums of St. Petersburg, deliriously imagining himself above society’s laws. But when he commits a random murder, only suffering ensues. Embarking on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden prostitute, can offer the chance of redemption.",
        'category': 'classics'
    },
    {
        'title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald',
        'qualities': [
            {
                'quality': 'new',
                'price': 21.99,
                'quantity': 4,
            },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=XL6MEAAAQBAJ&printsec=frontcover&img=1&zoom=1',
        'description': "'It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life' Jay Gatsby is the man who has everything. But one thing will always be out of his reach ... Everybody who is anybody is seen at his glittering parties. Day and night his Long Island mansion buzzes with bright young things drinking, dancing and debating his mysterious character. For Gatsby - young, handsome, fabulously rich - always seems alone in the crowd, watching and waiting, though no one knows what for. Beneath the shimmering surface of his life he is hiding a secret: a silent longing that can never be fulfilled. And soon this destructive obsession will force his world to unravel.",
        'category': 'classics'
    },
    {
        'title': 'The Fabric of the Cosmos',
        'author': 'Brian Green',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': '',
        'description': '',
        'category': 'science',
    },
    {
        'title': 'The Mind of God',
        'author': 'Paul Davies',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': '',
        'description': 'Exploration of whether modern science can provide the key that will unlock all the secrets of existence.',
        'category': 'science',
    },
    {
        'title': 'What an Owl Knows',
        'author': 'Jennifer Ackerman',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=bzusEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl',
        'description': "‘And if anyone knows anything about anything…it's Owl who knows something about something.’ Winnie-the-Pooh, A. A. Milne \n\n From prehistoric cave paintings to the prints and etchings of Picasso, owls have captivated and inspired us for millennia. Whether they appear as ancient Athenian symbols of wisdom, ghostly harbingers of death, or the cuddly sidekicks of Harry Potter and Winnie the Pooh, these birds have continued to fascinate and disturb us in equal measure. Through revelatory new behavioural research, Jennifer Ackerman provides an intimate glimpse into these magnificent creatures’ lives. From the evolutionary quirks behind their silent flight and rotating heads, to their romantic relationships and parenting styles, What an Owl Knows brings the rich natural history of owls to life. Deftly weaving together science and art, Ackerman journeys into the owl’s moonlit world and asks: what is it about these birds that so enthrals us?",
        'category': 'science',
    },
    {
        'title': 'Great Expectations',
        'author': 'Charles Dickens',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=etp4J_KuuHwC&printsec=frontcover&img=1&zoom=1&edge=curl',
        'description': 'An unknown benefactor provides Philip Pirrip with the chance to escape his poor upbringing. Aspiring to be a gentleman, and encouraged by his expectations of wealth, he abandons his friends and moves to London. His expectations prove to be unfounded however, and he must return home penniless.',
        'category': 'classics',
    },
    {
        'title': 'Kokoro',
        'author': 'Natsume Soseki',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=pONmEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl',
        'description': "\"The subject of 'Kokoro, ' which can be translated as 'the heart of things' or as 'feeling,' is the delicate matter of the contrast between the meanings the various parties of a relationship attach to it. In the course of this exploration, Soseki brilliantly describes different levels of friendship, family relationships, and the devices by which men attempt to escape from their fundamental loneliness. The novel sustains throughout its length something approaching poetry, and it is rich in understanding and insight. The translation, by Edwin McClellan, is extremely good.\" —Anthony West, The New Yorker",
        'category': 'classics',
    },
    {
        'title': 'The Biggest Ideas in the Universe',
        'author': 'Sean Carroll',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': '',
        'description': '‘Sean Carroll has achieved something I thought impossible: a bridge between popular science and the mathematical universe of working physicists. Magnificent!’ Brian Clegg, author of Ten Days in Physics that Shook the World \n\n Immense, strange and infinite, the world of modern physics often feels impenetrable to the undiscerning eye – a jumble of muons, gluons and quarks, impossible to explain without several degrees and a research position at CERN. But it doesn’t have to be this way! Allow world-renowned theoretical physicist and bestselling author Sean Carroll to guide you through the biggest ideas in the universe. Elegant and simple, Carroll unravels this web of theories and formulae equation by equation, getting to the heart of the truths they represent. — In Space, Time and Motion, the first book of this landmark trilogy, Carroll delves into the core of classical physics. From Euclid to Einstein, Space, Time and Motion explores the ideas which revolutionised science and forever changed our understanding of our place in the cosmos.',
        'category': 'science',
    },
    {
        'title': 'The Romance of the Three Kingdoms',
        'author': 'Luo Guanzhong',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=hSJJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl',
        'description': "A new translation and abridgement of one of the four classical Chinese novels - an epic story of warring factions in the era of China's Han dynasty Part historical and part legend, The Romance of the Three Kingdoms dramatizes the lives of feudal lords and their retainers, recounting their personal and military battles, intrigues, and struggles to achieve dominance for almost a hundred years.It is one of the most beloved works of East Asian literature, and the most famous historical novel in China.",
        'category': 'classics',
    },
    {
        'title': 'For Whom the Bell Tolls',
        'author': 'Ernest Hemmingway',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
        {
            'quality': 'very good',
            'price': 15.0,
            'quantity': 1,
        },
        {
            'quality': 'good',
            'price': 10.0,
            'quantity': 5,
        },
        {
            'quality': 'acceptable',
            'price': 7.0,
            'quantity': 1,
        }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=-08IVs9NR14C&printsec=frontcover&img=1&zoom=1',
        'description': "Ernest Hemingway's masterpiece on war, love, loyalty, and honor tells the story of Robert Jordan, an antifascist American fighting in the Spanish Civil War. In 1937 Ernest Hemingway traveled to Spain to cover the civil war there for the North American Newspaper Alliance. Three years later he completed the greatest novel to emerge from “the good fight” and one of the foremost classics of war literature. For Whom the Bell Tolls tells of loyalty and courage, love and defeat, and the tragic death of an ideal. Robert Jordan, a young American in the International Brigades, is attached to an antifascist guerilla unit in the mountains of Spain. In his portrayal of Jordan’s love for the beautiful Maria and his superb account of a guerilla leader’s last stand, Hemingway creates a work at once rare and beautiful, strong and brutal, compassionate, moving, and wise. Greater in power, broader in scope, and more intensely emotional than any of the author’s previous works, For Whom the Bell Tolls stands as one of the best war novels ever written.",
        'category': 'classics',
    },
    {
        'title': 'Chaos',
        'author': 'James Gleick',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }],
        'isFavourite': false,
        'imageUrl': 'http://books.google.com/books/content?id=upcJCIH8M_oC&printsec=frontcover&img=1&zoom=1',
        'description': "James Gleick explains the theories behind the fascinating new science called chaos. Alongside relativity and quantum mechanics, it is being hailed as the twentieth century's third revolution. 8 pages of photos.",
        'category': 'science',
    },
    {
        'title': 'The Tinkertoy Computer and Other Machinations',
        'author': 'A. K. Dewdney',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }],
        'isFavourite': false,
        'imageUrl': 'imageUrl',
        'description': "From a distance the Tinkertoy computer resembles a childhood fantasy gone wild or, as one of the group members remarked, a spool-and-stick version of the 'space slab' from the movie 2001: A Space Odyssey. Unlike the alien monolith, the computer plays a mean game of tic-tac-toe. A Tinkertoy framework called the read head clicks and clacks its way down the from the the monolith. At some point the clicking mysteriously stops; a 'core piece' within the framework spins and then with a satisfying 'kathunk' indirectly kicks an 'output duck, ' a bird-shaped construction. The output duck swings down from its perch as that its beak points at a number--which identifies the computer's next move in a game of tic-tac-toe.",
        'category': 'technology',
    },
    {
        'title': 'Automate the Boring Stuff with Python, 2nd Edition',
        'author': 'Al Sweigart',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }],
        'isFavourite': false,
        'imageUrl': '',
        'description': "Learn how to code while you write programs that effortlessly perform useful feats of automation! The second edition of this international fan favorite includes a brand-new chapter on input validation, Gmail and Google Sheets automations, tips for updating CSV files, and more. If you've ever spent hours renaming files or updating spreadsheet cells, you know how tedious tasks like these can be. But what if you could have your computer do them for you? Automate the Boring Stuff with Python, 2nd Edition teaches even the technically uninclined how to write programs that do in minutes what would take hours to do by hand—no prior coding experience required! This new, fully revised edition of Al Sweigart’s bestselling Pythonic classic, Automate the Boring Stuff with Python, covers all the basics of Python 3 while exploring its rich library of modules for performing specific tasks, like scraping data off the Web, filling out forms, renaming files, organizing folders, sending email responses, and merging, splitting, or encrypting PDFs. There’s also a brand-new chapter on input validation, tutorials on automating Gmail and Google Sheets, tips on automatically updating CSV files, and other recent feats of automations that improve your efficiency. Detailed, step-by-step instructions walk you through each program, allowing you to create useful tools as you build out your programming skills, and updated practice projects at the end of each chapter challenge you to improve those programs and use your newfound skills to automate similar tasks. Boring tasks no longer have to take to get through—and neither does learning Python!",
        'category': 'technology',
    },
    {
        'title': 'Eloquent Javascript, 3rd Edition',
        'author': 'Marijn Haverbeke',
        'qualities': [{
            'quality': 'new',
            'price': 21.99,
            'quantity': 4,
        },
            {
                'quality': 'very good',
                'price': 15.0,
                'quantity': 1,
            },
            {
                'quality': 'good',
                'price': 10.0,
                'quantity': 5,
            },
            {
                'quality': 'acceptable',
                'price': 7.0,
                'quantity': 1,
            }],
        'isFavourite': false,
        'imageUrl': '',
        'description': "Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications. JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track. As with previous editions, Haverbeke continues to teach through extensive examples and immerses you in code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. You start by learning the basic structure of the JavaScript language as well as control structures, functions, and data structures to help you write basic programs. Then you'll learn about error handling and bug fixing, modularity, and asynchronous programming before moving on to web browsers and how JavaScript is used to program them. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you'll learn how to: - Understand the essential elements of programming, including syntax, control, and data - Organize and clarify your code with object-oriented and functional programming techniques - Script the browser and make basic web applications - Use the DOM effectively to interact with browsers - Harness Node.js to build servers and utilities Isn't it time you became fluent in the language of the Web? * All source code is available online in an inter¬active sandbox, where you can edit the code, run it, and see its output instantly.",
        'category': 'technology',
    }

]

