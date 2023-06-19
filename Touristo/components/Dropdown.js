import React, { useState, useCallback } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

const Dropdown = ({ setSelectedCountry }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Deutschland', value: 'DE'},
    {label: 'Schweiz', value: 'swiss'},
    {label: 'Österreich', value: 'austria'},
    {label: 'Italien', value: 'italy'},
    {label: 'Kroatien', value: 'croatia'},
    {label: 'Tschechien', value: 'tschech'}
  ]);

  const handleValueChange = useCallback((value) => {
    setValue(value);
    setSelectedCountry(value);
  }, [setSelectedCountry]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={setItems}

        theme="LIGHT"
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}

        placeholder="Wähle ein Element"

        style={{ width: 350 }}
        textStyle={{
          fontSize: 18
        }}
        containerStyle={{
          width: 350
        }}
      />
    </View>
  );
};



export default Dropdown;
