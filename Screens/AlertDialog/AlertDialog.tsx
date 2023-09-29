import { Text, View ,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Dialog from "react-native-dialog";

function AlertDialog() {

    const [visible, setVisible] = useState(true);

     const showDialog = () => {
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
  
    const handleDelete = () => {
   
      setVisible(false);
    };
  

  //render() {
    return (
      <View style={styles.container}>
         <Dialog.Container visible={visible}>
      <Dialog.Title>Account delete</Dialog.Title>
      <Dialog.Description>
        Do you want to delete this account? You cannot undo this action.
      </Dialog.Description>
      {/* <Dialog.Button label="Cancel" />
      <Dialog.Button label="Delete" /> */}
    </Dialog.Container>
      </View>
    )
 // }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default AlertDialog