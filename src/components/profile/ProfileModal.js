import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../assets/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const ProfileModal = ({ open, onClose }) => {
  return (
    <GestureRecognizer onSwipeDown={onClose}>
      <Modal
        transparent
        visible={open}
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color={colors.gray} />
              </TouchableOpacity>

              <Image
                style={{ height: 30, width: 90 }}
                source={{
                  uri: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
                }}
              />
              <View style={{ height: 24, width: 24 }} />
            </View>
            <View style={styles.modalBody}>
              <Text>modal body</Text>
            </View>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  innerContainer: {
    minHeight: 460,
    backgroundColor: "white",
    width: "84%",
    elevation: 2,
    borderRadius: 10,
    padding: 15,
  },
  header: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalBody: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
