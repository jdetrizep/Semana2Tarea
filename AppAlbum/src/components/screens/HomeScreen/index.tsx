import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ITodo from '../../../models/ITodo'
import TodoDetails from '../../organisms/TodoDetails'
import TodoList from '../../organisms/TodoList'

const HomeScreen = () => {
    const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
    return (
        <View>
            {currentTodo ? (
                <TodoDetails todo={currentTodo} setCurrentTodo={setCurrentTodo}/>
            ) : (
                <TodoList setCurrentTodo={setCurrentTodo} />
            )}
        </View>
    )
}

export default HomeScreen
