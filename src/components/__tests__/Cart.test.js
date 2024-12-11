import { fireEvent, render, screen } from "@testing-library/react";
import RestroMenu from "../RestroMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestroMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordionHeader = screen.getByText("Recommended 11");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(11);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(11);
  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
