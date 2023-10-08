import { fireEvent, render, screen } from "@testing-library/react-native";
import SearchField from "./search-field.comp";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store } from "@reduxjs/toolkit";

describe("SearchField", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store: Store;
  let textFilter = "";
  const setTextFilter = (text: string) => {
    textFilter = text;
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchField textFilter="" setTextFilter={() => {}} />
      </Provider>,
    );

    const searchInput = getByPlaceholderText("Search...");

    expect(searchInput).toBeTruthy();
  });

  it("should update textFilter when input changes", () => {
    const { getByPlaceholderText } = render(
      <SearchField textFilter={textFilter} setTextFilter={setTextFilter} />,
    );

    const searchInput = getByPlaceholderText("Search...");

    fireEvent.changeText(searchInput, "textFilter value is changed");

    expect(textFilter).toBe("textFilter value is changed");
  });
});
