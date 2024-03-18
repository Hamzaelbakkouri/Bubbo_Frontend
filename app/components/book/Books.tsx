import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BookCard from './BookCard';
import { book } from '../../types/api.Book';

const books: book[] = [
    {
        id: 1,
        title: "Breaking Bad",
        creationDate: "2023-05-10",
        image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        author: "Frances Hodgson Burnett",
        description: "A timeless classic about a young girl who discovers a hidden, magical garden.",
        rating: 4.5,
        price: 12.99,
        category:"Perfect Book",
        language: "English",
        bgColor: "#FA784A"
    },
    {
        id: 2,
        title: "Soul",
        creationDate: "2022-11-30",
        image: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
        author: "Olivia Wilson",
        description: "A story of love, wealth, and tragedy set in the Roaring Twenties.",
        rating: 4.2,
        price: 14.99,
        category:"Perfect Book",
        language: "English",
        bgColor: "#FA784A"
    },
    {
        id: 3,
        title: "Teaspoon Earth and Sea",
        creationDate: "2021-07-15",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1346674530i/15814104.jpg",
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series, following the adventures of a young wizard.",
        rating: 4.8,
        price: 19.99,
        category:"Perfect Book",
        language: "English",
        bgColor: "#FA784A"
    },
    {
        id: 4,
        title: "Harry_Potter",
        creationDate: "2022-03-20",
        image: "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
        author: "Harper Lee",
        description: "A powerful story of racial injustice and moral growth in a small Southern town.",
        rating: 4.7,
        price: 10.99,
        category:"Perfect Book",
        language: "English",
        bgColor: "#FA784A"
    }
]

const Books = () => {

    const renderItem = ({ item }: { item: book }) => {
        return (
            <BookCard book={item} />
        );
    }
    return (
        <View style={{ backgroundColor: "#242423" }}>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Books