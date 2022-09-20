import React from "react";
import Modal from "./Modal";
import renderer from "react-test-renderer";

describe("Modal", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<Modal title="Your title modal" Message="Your message from the modal" btnMessage="Submit"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
