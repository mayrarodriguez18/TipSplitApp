import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { CalculatorButton } from './components/CalculatorButton';
import { useTipCalculator } from './hooks/useTipCalculator';

export default function TipSplitScreen() {  
  
  const { 
    bill, 
    tipPercentage, 
    splitCount, 
    totalTip, 
    totalBill,
    totalPerPerson, 
    handleNumber, 
    setTipPercentage, 
    updatePeople 
  } = useTipCalculator();

  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.resultSection}>
        <Text style={styles.label}>Total por Persona</Text>
        <Text style={styles.mainAmount}>C${totalPerPerson.toFixed(2)}</Text> 
        
        <View style={styles.subResults}>
          <Text style={styles.subText}>Cuenta: C${parseFloat(bill || '0').toFixed(2)}</Text>
          <Text style={styles.subText}>Propina ({tipPercentage}%): C${totalTip.toFixed(2)}</Text>
          <Text style={styles.subText}>Total a pagar: C${totalBill.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.controlsSection}>
        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>Propina</Text>
          <View style={styles.buttonGroup}>
            {[10, 15, 20].map((value) => (
              <TouchableOpacity 
                key={value} 
                onPress={() => setTipPercentage(value)}
                style={[
                  styles.tipButton, 
                  tipPercentage === value && { backgroundColor: '#FF8C00' } 
                ]}
              >
                <Text style={styles.tipButtonText}>{value}%</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.controlRow}>
          <Text style={styles.controlLabel}>Dividir</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={() => updatePeople(-1)} style={styles.counterBtn}>
                <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{splitCount}</Text>
            <TouchableOpacity onPress={() => updatePeople(1)} style={styles.counterBtn}>
                <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.keyboardSection}>
        <View style={styles.row}>
          <CalculatorButton label="1" onPress={() => handleNumber('1')} />
          <CalculatorButton label="2" onPress={() => handleNumber('2')} />
          <CalculatorButton label="3" onPress={() => handleNumber('3')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton label="4" onPress={() => handleNumber('4')} />
          <CalculatorButton label="5" onPress={() => handleNumber('5')} />
          <CalculatorButton label="6" onPress={() => handleNumber('6')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton label="7" onPress={() => handleNumber('7')} />
          <CalculatorButton label="8" onPress={() => handleNumber('8')} />
          <CalculatorButton label="9" onPress={() => handleNumber('9')} />
        </View>
        <View style={styles.row}>
          <CalculatorButton label="0" onPress={() => handleNumber('0')} />
          <CalculatorButton label="." onPress={() => handleNumber('.')} />
          <CalculatorButton label="⌫" onPress={() => handleNumber('del')} />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  resultSection: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  mainAmount: {
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subResults: {
    alignItems: 'center',
  },
  subText: {
    color: '#888',
    fontSize: 18,
    marginTop: 4,
  },
  controlsSection: {
    flex: 0.8, 
    paddingHorizontal: 25,
    justifyContent: 'center',   
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10, 
  },
  controlLabel: {
    color: '#fff',
    fontSize: 18,
    
    flex: 1,      
  },
  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E', 
    borderRadius: 25,
    padding: 4,
    marginLeft: 15, 
  },
  tipButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  tipButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    padding: 4,
    marginLeft: 15, 
  },
  counterBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    borderRadius: 22,
  },
  counterValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  btnText: { color: '#fff', fontSize: 26 },
  keyboardSection: {
    flex: 2.2,
    padding: 15,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  }
});