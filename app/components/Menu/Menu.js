import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'
import { OffCanvas3D } from 'react-native-off-canvas-menu'

const Menu = () => (
	<View style={{flex: 1}}>
      <OffCanvas3D
      active
      onMenuPress={e=>{}}
      backgroundColor={'#222222'}
      menuTextStyles={{color: 'white'}}
      handleBackPress={true}
      menuItems={[
        {
          title: 'Menu 1',
          icon: <Icon name="camera" size={35} color='#ffffff' />,
          renderScene: <Dashboard />
        },
        {
          title: 'Menu 2',
          icon: <Icon name="bell" size={35} color='#ffffff' />,
          renderScene: <View/>
        }
      ]}/>
    </View>
)

export default Menu
