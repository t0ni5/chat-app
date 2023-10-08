import { View, TextInput } from "react-native";

interface SearchBarProps {
  textFilter: string;
  setTextFilter: (arg: string) => void;
}

const SearchField: React.FC<SearchBarProps> = ({
  textFilter,
  setTextFilter,
}: SearchBarProps) => {
  return (
    <View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          borderRadius: 5,
        }}
        placeholder="Search..."
        value={textFilter}
        onChangeText={(text) => setTextFilter(text)}
      />
    </View>
  );
};

export default SearchField;
