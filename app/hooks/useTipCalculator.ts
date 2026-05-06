import { useState, useEffect } from 'react';
import * as Haptics from 'expo-haptics';

export const useTipCalculator = () => {
  const [bill, setBill] = useState('0');
  const [tipPercentage, setTipPercentage] = useState(20);
  const [splitCount, setSplitCount] = useState(1);
  
 
  const [results, setResults] = useState({
    totalTip: 0,
    totalBill: 0,
    totalPerPerson: 0
  });

  
  const handleNumber = (num: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    if (num === 'del') {
      setBill(bill.length > 1 ? bill.slice(0, -1) : '0');
      return;
    }

    if (num === '.' && bill.includes('.')) return; 

    setBill(bill === '0' && num !== '.' ? num : bill + num);
  };

 
  const updatePeople = (amount: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (splitCount + amount >= 1) {
      setSplitCount(splitCount + amount);
    }
  };

  
  useEffect(() => {
    const billFloat = parseFloat(bill) || 0;
    const totalTip = (billFloat * tipPercentage) / 100;
    const totalBill = billFloat + totalTip;
    const totalPerPerson = totalBill / splitCount;

    setResults({
      totalTip,
      totalBill,
      totalPerPerson
    });
  }, [bill, tipPercentage, splitCount]);

  return {
    bill,
    tipPercentage,
    splitCount,
    ...results,
    handleNumber,
    setTipPercentage,
    updatePeople
  };
};