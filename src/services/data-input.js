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
    }

]

