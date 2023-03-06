import {act, render, screen} from "@testing-library/react";
import {Counter} from "../../junior/task_2_react_counter";
import userEvent from "@testing-library/user-event";

describe('Junior Task | React Counter', () => {
    it('should render initial count and prefix', () => {
        // @ts-ignore
        render(<Counter countPrefix="prefix" />)

        expect(screen.getByText(/prefix/i)).toBeInTheDocument();
        expect(screen.getByText(/0/i)).toBeInTheDocument();
    })

    it('should increase count on button click', async () => {
        // @ts-ignore
        render(<Counter countPrefix="prefix" />)

        const button = screen.getByRole('button', { name: "Increase Count"});

        await act(async () => {
            await userEvent.click(button);
        })

        expect(screen.getByText(/prefix/i)).toBeInTheDocument();
        expect(await screen.findByText(/1/i)).toBeInTheDocument();
    })
})

