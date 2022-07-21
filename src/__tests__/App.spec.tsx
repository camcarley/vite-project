import { act, renderHook } from "@testing-library/react-hooks";
import { expect,describe,it, beforeEach } from "vitest";
import App, { useCounter } from "../App";
import { render, screen, userEvent } from "../utils/setup-tests";

describe("Simple working test", () => {
  it("the title is visible", () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("count is 1")).toBeTruthy();
  });
});

describe("useCounter()", () => {

  it("inc() should increment counter", () => {
        const initVal:number = 0;
        const { result } = renderHook(() => useCounter(initVal));
        const { count, inc} = result.current;

        const initalCount = count;

        expect(count).toEqual(initVal);
        act(() => {
            inc();
        });
        expect(result.current.count).not.toEqual(initalCount);
        expect(result.current.count).toEqual(initalCount + 1);
  });

  it("dec() should decrement counter", () => {
        const initVal:number = 0;
        const { result } = renderHook(() => useCounter(initVal));
        const { count, dec} = result.current;
        const initalCount = count;
        expect(count).toEqual(initVal);
        act(() => {
            dec();
        });
          expect(result.current).not.toEqual(initVal);
          expect(result.current.count).toEqual(initalCount - 1);
  });

    it("incBy() should decrement counter", () => {
      const initVal: number = 0;
      const { result } = renderHook(() => useCounter(initVal));
      const { count, incBy } = result.current;
      const initalCount = count;

      const incByVal: number = 3;
      expect(count).toEqual(initVal);
      act(() => {
        incBy(incByVal);
      });
      expect(result.current.count).toEqual(initalCount + incByVal);
    });

      it("decBy() should decrement counter", () => {
        const initVal: number = 0;
        const { result } = renderHook(() => useCounter(initVal));
        const { count, decBy } = result.current;
        expect(count).toEqual(initVal);
        const decByVal: number = 3;
        act(() => {
          decBy(decByVal);
        });
        expect(result.current.count).toEqual(count-decByVal);
      });

});
