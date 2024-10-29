import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ECECEC', dark: '#2f2f2f' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-tesci.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Objetivos</ThemedText>
      </ThemedView>
      
      <Collapsible title="hola">
        <ThemedText>
          hola <ThemedText type="defaultSemiBold">hola</ThemedText> aaaaaa dos{' '}
          <ThemedText style={{ fontFamily: 'GothamBook' }}>
            uno uno uno.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 160,
    width: 180,
    marginTop: 60,
    left: 0,
    alignSelf: 'center',
    resizeMode: 'contain',

  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
