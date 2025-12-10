import { View, Text, SectionList } from 'react-native'
import React from 'react'
const listitem=[
    {
        title:'fruits',
        data:[
            {id:1,name:'apple'},
            {id:2,name:'mango'},
            {id:3,name:'banana'},
        ]
    },
    {
    title:'fruits',
        data:[
            {id:4,name:'cattot'},
            {id:5,name:'onion'},
            {id:6,name:'pattato'},
        ]
    },
]

const SectionListSacreen = () => {
    const renderitem=({item}:any)=>(
        <View>
            <Text>{item.name}</Text>
        </View>
    )
    const renderSectionHeader=({section}:any)=>(
        <View>
            <Text>{section.title}</Text>
        </View>
    )
  return (
    <View>
    <SectionList
sections={listitem}
renderItem={renderitem}
renderSectionHeader={renderSectionHeader}
keyExtractor={(item)=>item.id.toString()}
    />
    </View>
  )
}

export default SectionListSacreen