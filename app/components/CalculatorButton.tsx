import { TouchableOpacity, Text } from "react-native";
import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  onPress: () => void;
}

export const CalculatorButton = ({ label, onPress }: Props) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flex: 1,
        margin: 5,
        padding: 20,
        backgroundColor: "#333",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </TouchableOpacity>
  );
};