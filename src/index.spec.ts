import { expect, it, spyOn } from "bun:test";
import { log } from "./index";

it("should call console.log correctly", () => {
	const logSpy = spyOn(console, "log");
	log();

	expect(logSpy).toHaveBeenCalledWith("Hello via Bun!!!");
});
