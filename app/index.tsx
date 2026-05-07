import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, useWindowDimensions } from 'react-native';
import * as Haptics from 'expo-haptics'; 
import { CalculatorButton } from './components/CalculatorButton';
import { useTipCalculator } from './hooks/useTipCalculator';

export default function TipSplitScreen() {  
  const { height, width } = useWindowDimensions(); 
  const isLandscape = width > height; 

  const { 
    bill, tipPercentage, splitCount, 
    totalTip, totalBill, totalPerPerson, 
    handleNumber, setTipPercentage, updatePeople 
  } = useTipCalculator();

  const handleControlPress = (action: () => void) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    action();
  };

  const handleCustomTip = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    

    const customValue = prompt("Ingresa el porcentaje de propina (ej. 18):");
    if (customValue !== null) {
        const num = parseInt(customValue);
        if (!isNaN(num) && num >= 0) setTipPercentage(num);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={isLandscape}>
        

        <View style={[styles.resultSection, isLandscape && { flex: 0, paddingVertical: 40 }]}>
          <Text style={styles.label}>Total por Persona</Text>
          <Text style={[styles.mainAmount, isLandscape && { fontSize: 50 }]}>C${totalPerPerson.toFixed(2)}</Text> 
          
          <View style={isLandscape ? {flexDirection: 'row', gap: 30} : styles.subResults}>
            <Text style={styles.subText}>Cuenta: C${parseFloat(bill || '0').toFixed(2)}</Text>
            <Text style={styles.subText}>Propina ({tipPercentage}%): C${totalTip.toFixed(2)}</Text>
            <Text style={styles.subText}>Total: C${totalBill.toFixed(2)}</Text>
          </View>
        </View>

       
        <View style={styles.controlsSection}>
          <View style={styles.controlRow}>
            <Text style={styles.controlLabel}>Propina</Text>
            <View style={styles.buttonGroup}>
              {[10, 15, 20].map((value) => (
                <TouchableOpacity 
                  key={value} 
                  onPress={() => handleControlPress(() => setTipPercentage(value))}
                  style={[styles.tipButton, tipPercentage === value && { backgroundColor: '#FF8C00' }]}
                >
                  <Text style={styles.tipButtonText}>{value}%</Text>
                </TouchableOpacity>
              ))}
            
              <TouchableOpacity 
                onPress={handleCustomTip}
                style={[styles.tipButton, ![10, 15, 20].includes(tipPercentage) && { backgroundColor: '#FF8C00' }]}
              >
                <Text style={styles.tipButtonText}>Otro</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.controlRow}>
            <Text style={styles.controlLabel}>Dividir</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => handleControlPress(() => updatePeople(-1))} style={styles.counterBtn}>
                  <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{splitCount}</Text>
              <TouchableOpacity onPress={() => handleControlPress(() => updatePeople(1))} style={styles.counterBtn}>
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

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000' 
  },
  resultSection: { 
    flex: 1.5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 20 
  },
  label: { color: '#fff', fontSize: 18, fontWeight: '600' },
  mainAmount: { color: '#fff', fontSize: 60, fontWeight: 'bold' },
  subResults: { alignItems: 'center' },
  subText: { color: '#888', fontSize: 16, marginTop: 4 },
  
  controlsSection: { 
    paddingHorizontal: 25, 
    marginVertical: 15,
    width: '100%',
    maxWidth: 500, 
    alignSelf: 'center' 
  },
  controlRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 8 
  },
  controlLabel: { color: '#fff', fontSize: 18, flex: 1 },
  buttonGroup: { flexDirection: 'row', backgroundColor: '#1C1C1E', borderRadius: 25, padding: 4 },
  tipButton: { paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  tipButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  counterContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1C1C1E', borderRadius: 25, padding: 4 },
  counterBtn: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C2C2E', borderRadius: 20 },
  counterValue: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginHorizontal: 15 },
  btnText: { color: '#fff', fontSize: 24 },
 
  keyboardSection: { 
    flex: 2.5, 
    padding: 15,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }
});