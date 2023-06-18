import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View>
      <DropDownPicker
        items={[
          { label: 'Item 1', value: 'item1' },
          { label: 'Item 2', value: 'item2' },
          { label: 'Item 3', value: 'item3' },
        ]}
        defaultValue={selectedItem || 'item1'}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={item => setSelectedItem(item.value)}
      />
    </View>
  );
};

export default Dropdown;
