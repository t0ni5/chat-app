import { Modal, TouchableOpacity, View, Text } from "react-native";
import { styles } from "../../../../assets/styles";
import { ChatRoom } from "../../../core/chat/types/chat-dto.type";
import { userSelector } from "../../../core/user/store/user.selectors";
import { useAppSelector } from "../../../../hooks/hooks";
interface ContextMenuPosition {
  top: number;
  left: number;
}
interface ContextMenuProps {
  isContextMenuVisible: boolean;
  handleHideContextMenu: () => void;
  contextMenuPosition: ContextMenuPosition;
  handleEdit: () => void;
  handleDelete: () => void;
  item: ChatRoom;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  isContextMenuVisible,
  handleHideContextMenu,
  contextMenuPosition,
  handleEdit,
  handleDelete,
  item,
}: ContextMenuProps) => {
  const user = useAppSelector(userSelector);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isContextMenuVisible}
        onRequestClose={handleHideContextMenu}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={handleHideContextMenu}>
          <View
            style={[
              styles.chatItemContextMenu,
              {
                top: contextMenuPosition.top,
                left: contextMenuPosition.left,
              },
            ]}
          >
            {user === item.createdBy ? (
              <>
                <Text onPress={handleEdit}>Edit</Text>
                <Text onPress={handleDelete}>Delete</Text>
              </>
            ) : (
              <Text>You can edit/delete only your own chats!</Text>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ContextMenu;
