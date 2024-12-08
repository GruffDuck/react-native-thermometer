İşte kaliteli, detaylı ve profesyonel bir README içeriği:

---

# **React Native Thermometer**

A customizable and animated thermometer component for React Native applications, built with TypeScript.

![React Native Thermometer Demo](./src/images/thermometer.png) <!-- Add a demo image or gif link here -->

## **Features**
- 📏 **Customizable**: Adjust dimensions, colors, and maximum temperature.
- 🎨 **Stylish**: Built-in color options with support for customization.
- 🎞️ **Smooth Animations**: Temperature changes are animated for better visual feedback.
- 🌍 **Cross-Platform**: Works seamlessly on iOS and Android.

---

## **Installation**
Install the package using npm or yarn:

```bash
npm install react-native-thermometer
```

or

```bash
yarn add react-native-thermometer
```

You also need to install `react-native-svg` as it is a peer dependency:

```bash
npm install react-native-svg
```

---

## **Usage**

### **Basic Example**
```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Thermometer from 'react-native-thermometer';

const App = () => {
  return (
    <View style={styles.container}>
      <Thermometer temperature={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
```

---

### **Advanced Example with Customizations**
```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Thermometer from 'react-native-thermometer';

const App = () => {
  return (
    <View style={styles.container}>
      <Thermometer
        temperature={45}
        maxTemperature={100}
        width={200}
        height={400}
        fillColor="#4CAF50"
        backgroundColor="#E0E0E0"
        tickColor="#9E9E9E"
        highlightedTickColor="#FF5722"
        borderColor="#000"
        style={styles.customThermometer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  customThermometer: {
    marginTop: 20,
  },
});

export default App;
```

---

## **Props**

| Prop Name             | Type                | Default       | Description                                           |
|-----------------------|---------------------|---------------|-------------------------------------------------------|
| `temperature`         | `number`           | Required      | The current temperature value to display.             |
| `maxTemperature`      | `number`           | `50`          | The maximum temperature value for the thermometer.    |
| `width`               | `number`           | `150`         | The width of the thermometer.                        |
| `height`              | `number`           | `300`         | The height of the thermometer.                       |
| `fillColor`           | `string`           | `#EF3024`     | The color of the thermometer's temperature bar.       |
| `backgroundColor`     | `string`           | `#fff`        | The background color of the thermometer.             |
| `tickColor`           | `string`           | `#A9A9A9`     | The color of the tick marks.                         |
| `highlightedTickColor`| `string`           | `#FFFFFF`     | The color of the highlighted tick marks.             |
| `borderColor`         | `string`           | `#E6EAF4`     | The border color of the thermometer.                 |
| `style`               | `ViewStyle`        | `undefined`   | Additional styles for the thermometer container.     |



## **How It Works**

1. The `temperature` prop determines the height of the red bar.
2. The thermometer is animated to smoothly transition between temperature changes.
3. Ticks dynamically change color to reflect the current temperature level.

---

## **Known Issues**
- Ensure you install `react-native-svg` for the thermometer to render correctly.
- The thermometer may not render properly if the `temperature` exceeds `maxTemperature`. Always provide realistic values.

---

## **Contributing**
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Contact**
If you have any questions or need support, feel free to reach out:

- GitHub: [YourUsername](https://github.com/GruffDuck)
- Email: yalinbasmehmet@gmail.com

---

Bu doküman, paketinizi profesyonel bir şekilde tanıtır ve kullanıcıların hızlıca başlamasına olanak tanır. `Screenshots` kısmını kendi ekran görüntülerinizle güncelleyerek daha çekici hale getirebilirsiniz. 😊