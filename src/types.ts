import { ViewStyle } from "react-native";

export interface ThermometerProps {
  temperature: number;
  maxTemperature?: number;
  width?: number;
  height?: number;
  style?: ViewStyle;
  fillColor?: string;
  backgroundColor?: string;
  tickColor?: string;
  highlightedTickColor?: string;
  borderColor?: string;
}
