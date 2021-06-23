import React from "react";
import { Image } from 'react-native';

import { styles } from "./styles";

export function GuildIcon() {

const uri = 'https://seeklogo.net/wp-content/uploads/2018/10/discord-logo-1.png'

    return (
       <Image
       source={{uri}}
       style={styles.image}
       resizeMode= "cover"
       /> 
    )
}