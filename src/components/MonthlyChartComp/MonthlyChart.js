import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Col } from 'react-native-table-component';
import React, { useEffect, useMemo, useState } from 'react'

//components
import LoadingScreen from '../LoadingScreenComp/LoadingScreen';
import { useSelector } from 'react-redux';
import { filterAPIDataPerMonth } from '../Functions/filterDataMonthlyChart';
import getTodayDate from '../Functions/getTodayDate';

const MonthlyChart = () => {
  const rawData = useSelector(state=>state.Reducer);
  const [tableData , setTableData] = useState({
    widthArr: [120, 120, 120, 120, 120, 120, 120],
    tableHead: ['Date', 'Fajr', 'Sunrise', 'Zuhar', 'Asar', 'Magrib', 'Isha'],
    tableData: []
})

  const parsedData = useMemo(() => {
    return rawData ? JSON.parse(rawData) : null;
  }, [rawData]);
  
    useEffect(() => {
      if (parsedData && parsedData.data) {
        const extractedData = filterAPIDataPerMonth(parsedData.data);
        setTableData(prevState => ({
          ...prevState,
          tableData: extractedData
        }));
      }
    }, [parsedData]);
    
  if (!rawData || tableData.tableData.length == 0) {
    return (
      <LoadingScreen visible={true}/>
    ); 
  }

  let highLightRow = tableData.tableData.findIndex(ele=>ele[0] == getTodayDate());

  return (
    <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table >
              <Row data={tableData.tableHead} widthArr={tableData.widthArr} style={styles.header} textStyle={[styles.text,{fontWeight:'bold',fontSize:18}]}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={tableData.widthArr}
                      style={[styles.row, 
                        {backgroundColor: index == highLightRow ?'#7116f1':"#e6def2"}]}
                      textStyle={[styles.text ,{color:index == highLightRow ? "white" :'black'}]}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
  )
}

const styles =  StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    borderRadius:20,
    overflow:'hidden',
    borderWidth:2,
    borderColor:'#7116f1'
  },
  header: { 
    height: 70, 
    backgroundColor: '#7116f1' 
  },
  head: {  
    height: 40,  
    backgroundColor: '#f1f8ff' 
  },
  wrapper: { 
    flexDirection: 'row' 
  },
  row: {  
    height: 50,  
  },
  text: { 
    textAlign: 'center',
    fontSize:15,
    fontWeight:'500',
    color:'white'
  }
})
export default MonthlyChart