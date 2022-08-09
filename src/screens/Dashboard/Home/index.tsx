import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Container, styles, VerticalContainer} from './styles';
import FIcon from 'react-native-vector-icons/Ionicons';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from 'shared/store';
import {MainText, RegularText} from 'shared/theme/globalStyles';
import CurrencyInput from 'shared/components/CurrencyInput';

type Props = {};

const Home = (props: Props) => {
  const {settings} = useSelector((state: RootState) => state);
  const [baseValue, setBaseValue] = useState(0);
  const [counterValue, setCounterValue] = useState(0);

  const onPressSettings = () => {
    //Nav to Options
  };

  const onSelectBaseCurrency = () => {};
  const onSelectCounterCurrency = () => {};
  const onInterchange = () => {};
  return (
    <Container>
      <FIcon
        name="settings"
        size={30}
        color={settings.theme.colors.SECONDARY_BACKGROUND_COLOR}
        style={styles.settingsIcon}
        onPress={onPressSettings}
      />

      <FA5Icon
        name="exchange-alt"
        size={100}
        color={settings.theme.colors.SECONDARY_BACKGROUND_COLOR}
        onPress={onPressSettings}
        style={styles.exchaneIcon}
      />

      <MainText>Currency Converter</MainText>

      <CurrencyInput
        currency={settings.baseCurrency}
        onSelectCurrency={onSelectBaseCurrency}
      />
      <CurrencyInput
        currency={settings.counterCurrency}
        onSelectCurrency={onSelectCounterCurrency}
      />

      <RegularText size={12} align="center">
        1 {settings.baseCurrency} = {counterValue} {settings.counterCurrency} as
        of {new Date().toLocaleDateString()}
      </RegularText>

      <VerticalContainer>
        <MCIcon
          name="undo-variant"
          size={24}
          color={settings.theme.colors.SECONDARY_BACKGROUND_COLOR}
          onPress={onInterchange}
          style={styles.exchaneIcon}
        />
        <RegularText size={12} align="center">
          Reverse Currencies
        </RegularText>
      </VerticalContainer>
    </Container>
  );
};

export default Home;
