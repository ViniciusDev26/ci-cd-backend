import { beforeAll, expect, it, vi } from "vitest";
import { log } from "./index";

beforeAll(() => {
	vi.mock("console.log", vi.fn());
});

it("should call console.log correctly", () => {
	const logSpy = vi.spyOn(console, "log");
	log();

	expect(logSpy).toHaveBeenCalledWith("Hello via Bun!!!");
});
