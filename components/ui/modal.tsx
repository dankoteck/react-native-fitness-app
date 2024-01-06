import { PropsWithChildren, ReactNode } from "react";
import {
  Modal as NativeModal,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = PropsWithChildren & {
  visible: boolean;
  renderFooter?: (() => ReactNode) | undefined;
};

export default function Modal({
  visible,
  children,
  renderFooter = () => null,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NativeModal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={visible}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {children}
        </ScrollView>

        {renderFooter && (
          <View
            style={{
              padding: 12,
              paddingBottom: insets.bottom,
            }}
          >
            {renderFooter()}
          </View>
        )}
      </NativeModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: 12,
  },
});
