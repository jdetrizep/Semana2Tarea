import styled from '@emotion/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator, Image, StyleSheet, TouchableHighlight } from 'react-native'
import IPhoto from '../../../models/IPhoto'
import ITodo from '../../../models/ITodo'

export interface TodoDetails {
    todo: ITodo;
    setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo | null>>;
}

const TodoDetails: React.FC<TodoDetails> = ({todo, setCurrentTodo}) => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);

    const fetchPhotos = async() => {
        try {
            const photoReponse = await axios.get('https://jsonplaceholder.typicode.com/photos',);

            setPhotos((photoReponse.data as IPhoto[]).filter(photo => todo.id === photo.albumId)); 
            //console.log(todo.photos);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPhotos();
    }, [])

    return (
        <Container>
            <CustomText>Detalle de Album</CustomText>
            
            <Text>Id Album: {todo.id}</Text>
            <Text>Id Usuario: {todo.userId}</Text>
            <Text>Titulo Album: {todo.title}</Text>
             
            {photos.length > 0 && (
                <FlatList data={photos} renderItem={({item}) => <Image style={styles.image} source={{uri: item.thumbnailUrl}} /> } />
            )}
            <Button title="Back" onPress={() => setCurrentTodo(null)} />
        </Container>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        margin: 10,
        marginLeft: 30,
    },
});

const Container = styled.View`
    padding: 12px;
    height: 100%;
`
const AlbList = styled.FlatList`
    padding: 2px
`
const CustomText = styled.Text`
    font-size: 18px
`

export default TodoDetails
