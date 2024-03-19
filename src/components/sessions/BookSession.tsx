
import Modal, { ModalHandle } from "../ui/Modal.tsx";
import Input from "../ui/Input.tsx";
import Button from "../ui/Button.tsx";
import { FormEvent, useEffect, useRef } from "react";
import { Session, useSessionsContext } from "../store/sessions-context.tsx";

type BookSessionProps = {
    session: Session;
    onDone: () => void;

}

function BookSession({ session, onDone}: BookSessionProps) {
    const modal = useRef<ModalHandle>(null);
    const sessionContext = useSessionsContext();

    // used to open the modal upon load via exposed open method (imperative handler)
    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, []);

    function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData)
        // const data = Object.fromEntries(formData);
        sessionContext.bookSession(session);
        onDone();
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleOnSubmit}>
                <Input label="Name" id="name" name="name" type="text" />
                <Input label="Email" id="email" name="email" type="email" />
                <p className="actions">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button>Book Session</Button>
                </p>
            </form>
        </Modal>
    )

};

export default BookSession;