import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props ={
    handleGuildsSelect: (guild: GuildProps)=> void;
}

export function Guilds({handleGuildsSelect}: Props) {
    const guilds = [
        {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Teste',
        icon: 'image.png',
        owner: true
    },
]
    return (
        <View style={styles.container}>

            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={()=> handleGuildsSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=> <ListDivider/>}
                style={styles.guilds}
            />
        </View>
    );
}