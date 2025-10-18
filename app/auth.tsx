import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text>Create an account</Text>
        <TextInput
          label="email"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@mail.co"
          mode="outlined"
        />
      </View>

      <TextInput
        label="password"
        autoCapitalize="none"
        keyboardType="email-address"
        mode="outlined"
      />

      <Button mode="contained">Sign Up</Button>
    </KeyboardAvoidingView>
  );
}
