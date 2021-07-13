import React from 'react';
import { Text, View,ScrollView } from 'react-native';
import db from '../config';
export default class Searchscreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
        allTransaction:[],
       
    }
  }
  componentDidMount=async()=>{
    const tran=await db.collection("transactions").get()
    tran.docs.map((doc)=>{
      this.setState({
        allTransaction:[...this.state.allTransaction,doc.data()]
      })
    })
  }
    render() {
      return (
        <ScrollView>
        {this.state.allTransaction.map((transactions,index)=>{
          return(
          <View style={{ flex: 1,borderBottomWidth:2 }}
                 key={index}>
          <Text> {"Book Id :  "+transactions.bookId}</Text>
            <Text> {"Student Id :  "+transactions.studentId}</Text>
              <Text> {"Date :  "+transactions.date.toDate()}</Text>
                <Text> {"Transaction Type :  "+transactions.transactionType}</Text>
        </View>
          )
        })}
        
        </ScrollView>
      );
    }
}