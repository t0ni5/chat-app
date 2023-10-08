import { fireEvent, render, screen } from "@testing-library/react-native";
import Home from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const createHomeProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {},
  ...props,
});

describe("Home page", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store: Store;
  let props: any;

  beforeEach(() => {
    store = mockStore(initialState);
    props = createHomeProps({});
  });
  it("should render correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Home navigation={props.navigation} route={props.route} />
      </Provider>,
    );

    const searchInput = getByPlaceholderText("Enter your username");

    expect(searchInput).toBeTruthy();
    expect(screen.getByText("Sign in")).toBeDefined();
  });
  test("should display an alert if username is not provided", async () => {
    const mockAlert = jest.spyOn(Alert, "alert");
    render(
      <Provider store={store}>
        <Home navigation={props.navigation} route={props.route} />
      </Provider>,
    );

    fireEvent.press(screen.getByText("Get Started"));

    screen.debug();
    expect(mockAlert).toHaveBeenCalledWith("Username is required.");
  });
});
