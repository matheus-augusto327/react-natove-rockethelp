import { Heading, VStack } from "native-base";
import { Text, View } from "react-native";

export function SignIn() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
    </VStack>
  );
}
