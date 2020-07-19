import { rerenderTree } from "../render";

let state ={
    dialogsPage: {
        users: [
            {id: 1, name: 'Max'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Ivan'},
            {id: 4, name: 'Dimon'},
            {id: 5, name: 'Oleg'},
        ],
        messages: [
            {id: 1, message: 'hi!'},
            {id: 2, message: 'hello!'},
            {id: 3, message: 'da, tak i est!'},
        ]
    },
    generalPage: {
        films: [
            {
                logoUrl: 'https://ru.meming.world/images/ru/thumb/7/73/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82.jpg',
                title: "Плачущий кот",
                year: 2000
            },
            {
                logoUrl: 'https://r3.mt.ru/r20/photo57F6/20082594506-0/png/bp@2x.webp',
                title: "Кричащий кот",
                year: 2001
            },
            {
                logoUrl: 'https://ru.meming.world/images/ru/thumb/7/78/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg/300px-%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BA%D0%BE%D1%82_3.jpg',
                title: "Грустный кот",
                year: 2002
            },
            {
                logoUrl: 'https://www.meme-arsenal.com/memes/211bcdd033fcb439f9c11839945fdd97.jpg',
                title: "Кот в слезах",
                year: 2003
            },
        ]
    },
}

export const addMessage = ( postMessage ) => {
    const newMessage = {
        id: 4,
        message: postMessage
    };
    state.dialogsPage.messages.push( newMessage );
    rerenderTree( state );
}

export default state;