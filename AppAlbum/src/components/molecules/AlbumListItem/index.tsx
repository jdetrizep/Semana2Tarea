import styled from '@emotion/native'
import React from 'react'
import { View, Text } from 'react-native'
import ITodo from '../../../models/ITodo'

export interface AlbumListItemProps {
    album: ITodo;
}

const AlbumListItem: React.FC<AlbumListItemProps> = ({album}) => {
    return (
        <ItemContainer>
            <Text>{album.title}</Text>
        </ItemContainer>
    )
}

const ItemContainer = styled.View`
background-color: #f1f1f1;
border-radius: 32px;
padding: 8px 12px;
margin: 4px 0;
`;

export default AlbumListItem
