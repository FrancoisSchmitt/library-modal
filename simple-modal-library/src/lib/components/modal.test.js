import React from "react";
import Modal from "./Modal";
import renderer from "react-test-renderer";

describe("Modal", () => {
    it("renders properly", () => {
        const tree = renderer
            .create(<Modal title="Ici sera votre titre" Message="Ici sera votre message" btnMessage="Submit" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
