import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestroCard";
const RestroCardPromoted = withPromotedLabel(RestroCard);

it("Should render restaurant card component with props data", () => {
  render(<RestroCard resData={MOCK_DATA} />);
  const name = screen.getByText("Salad Days");
  expect(name).toBeInTheDocument();
});
it("Should render restaurant card component with promoted label", () => {
  render(<RestroCardPromoted resData={MOCK_DATA} />);
  const promoted = screen.getByText("Open");
  expect(promoted).toBeInTheDocument();
});
