/**
 * @jest-environment jsdom
*/
import "@testing-library/jest-dom";
import Card from "../src/components/Card.svelte";
import { render } from "@testing-library/svelte";
describe("tstando", ()=>{
	test("testando dentro", ()=>{
		const {getByRole} = render(Card, {imgSrc: 'images/98677e90349dff1d04519b1cebc0d02a 1.png'})
		expect(getByRole("")).toBeInTheDocument()
	})
})