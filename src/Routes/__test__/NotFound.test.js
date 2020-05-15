import React from "react";
import NotFound from "../NotFound";
import TestRenderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("Test for NotFound", ()=>{
    it('Snapshot should Match',()=>{
        const container = TestRenderer.create(<MemoryRouter><NotFound/></MemoryRouter>);
        expect(container.toJSON()).toMatchSnapshot();
    })
})
