import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ITodo from '../../../models/ITodo';
import TodoList from '../../organisms/TodoList'

const HomeScreen: React.FC = () => {
    const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);

    return (
        <View>
            <Text>Soy Homescreen</Text>
            <TodoList setCurrentTodo={setCurrentTodo}/>
        </View>
    )
}

export default HomeScreen
