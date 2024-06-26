import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PictureBookCard from "./PictureBookCard";

jest.mock("../../CustomImage/CustomImage", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: jest.fn((props) => <img alt={props.alt} {...props} />),
}));

describe("PictureBookCard", () => {
  const bookMock = {
    id: "1",
    title: "Test Book Title",
    cover: "/public/test-cover.jpeg",
  };

  it("renders correctly", () => {
    render(<PictureBookCard book={bookMock} showBookDetails={() => {}} />);

    const image = screen.getByRole("img", { name: /test book title/i });
    expect(image).toHaveAttribute("src");
    expect(image.src).toContain("/public/test-cover.jpeg");
  });

  it("calls showBookDetails on click", () => {
    const showBookDetailsMock = jest.fn();
    render(
      <PictureBookCard book={bookMock} showBookDetails={showBookDetailsMock} />,
    );

    fireEvent.click(
      screen.getByRole("img", { name: /test book title/i }).parentNode,
    );
    expect(showBookDetailsMock).toHaveBeenCalledTimes(1);
  });
});
