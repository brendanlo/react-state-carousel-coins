import Card from "./Card"
import { render, fireEvent } from "@testing-library/react";

it("smoke test: Card component", function () {
  const { container } = render(
    <Card
      caption="testing image 1"
      src="test1.com"
      currNum={1}
      totalNum={3}
    />
  );
});


it("Card has correct elements", function () {

  const { container } = render(
    <Card
      caption="testing image 1"
      src="test1.com"
      currNum={1}
      totalNum={3}
    />
  );

  const small = container.getElementsByTagName('small');

  expect(
    container.querySelector('h4[class="Card-title"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[src="test1.com"]')
  ).toBeInTheDocument();
  expect(
    small[0].textContent
  ).toEqual("Image 1 of 3.");
});

it("is a snapshot of a working version of Card component", function () {
  const { container, debug } = render(
    <Card
      caption="testing image 1"
      src="test1.com"
      currNum={1}
      totalNum={3}
    />);

  expect(container).toMatchSnapshot();
});