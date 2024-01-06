import { Feather } from "@expo/vector-icons";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Modal from "@/components/ui/modal";
import Tag from "@/components/ui/tag";
import { ExerciseItemData } from "@/ultilities/types";

type Props = {
  currentItem: ExerciseItemData;
  visible: boolean;
  onToggle: () => void;
  onNavigate: (idx: number) => void;
  order: number;
  totalItems: number;
};

export default function ExerciseModal({
  currentItem,
  visible,
  order,
  totalItems,
  onToggle,
  onNavigate,
}: Props) {
  const disabledPrevBtn = useMemo(() => order === 1, [order]);
  const disabledNextBtn = useMemo(
    () => order === totalItems,
    [order, totalItems]
  );

  const renderFooter = () => (
    <View style={styles.modalFooter}>
      <View style={styles.modalFooterNavigation}>
        <TouchableOpacity
          onPress={onNavigate.bind(null, -1)}
          disabled={disabledPrevBtn}
          style={{ opacity: disabledPrevBtn ? 0.15 : 1 }}
        >
          <Feather name="arrow-left-circle" size={30} color="#0954a5" />
        </TouchableOpacity>
        <View style={styles.modalFooterPaginate}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {(order + "").padStart(2, "0")}
          </Text>
          <Text style={{ fontSize: 12 }}>/{totalItems}</Text>
        </View>
        <TouchableOpacity
          onPress={onNavigate.bind(null, 1)}
          disabled={disabledNextBtn}
          style={{ opacity: disabledNextBtn ? 0.15 : 1 }}
        >
          <Feather name="arrow-right-circle" size={30} color="#0954a5" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.modalFooterCloseBtn} onPress={onToggle}>
        <Text style={styles.modalFooterCloseBtnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal visible={visible} renderFooter={renderFooter}>
      <View style={styles.modalContent}>
        <Text
          numberOfLines={2}
          style={[styles.modalContentTitle, { textAlign: "center" }]}
        >
          {currentItem.name}
        </Text>

        <View>
          <Text style={[styles.modalContentTitle, { marginTop: 16 }]}>
            Equipment
          </Text>
          <View style={styles.modalContentTags}>
            <Tag>{currentItem.equipment}</Tag>
          </View>
        </View>

        <View>
          <Text style={styles.modalContentTitle}>Focus Area</Text>
          <View style={styles.modalContentTags}>
            {currentItem.secondaryMuscles.map((item) => (
              <Tag key={`${currentItem.id}-${item}`}>{item}</Tag>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.modalContentTitle}>Instructions</Text>
          {currentItem.instructions.map((item) => (
            <Text key={item} style={{ fontSize: 16 }}>
              - {item}
            </Text>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    marginBottom: 16,
    height: 320,
  },

  modalContent: {
    gap: 24,
  },

  modalContentTitle: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 4,
  },

  modalContentTags: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 8,
  },

  modalFooter: {
    flexDirection: "row",
    alignItems: "center",
  },

  modalFooterNavigation: {
    flexDirection: "row",
    gap: 16,
    flex: 1,
    alignItems: "center",
  },

  modalFooterPaginate: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  modalFooterCloseBtn: {
    borderRadius: 24,
    backgroundColor: "#0954a5",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    flex: 1,
  },

  modalFooterCloseBtnText: {
    fontWeight: "900",
    fontSize: 22,
    color: "#fff",
  },
});
