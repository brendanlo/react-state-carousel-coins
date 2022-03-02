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


it("Card has correct caption", function () {

    const { container } = render(
        <Card
            caption="testing image 1"
            src="test1.com"
            currNum={1}
            totalNum={3}
        />
    );

    expect(
        container.querySelector('h4[class="Card-title"]')
    ).toBeInTheDocument();
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