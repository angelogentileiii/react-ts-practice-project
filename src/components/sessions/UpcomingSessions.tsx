import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../ui/Modal.tsx";
import { useSessionsContext } from "../store/sessions-context";
import Button from "../ui/Button.tsx";
import UpcomingSession from "./UpcomingSession.tsx";

type UpcomingSessionsProps = {
    onClose: () => void;
}

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null);
    const sessionContext = useSessionsContext();

    useEffect(() => {
        if(modal.current) {
            modal.current.open();
        }
    }, [])

    function handleCancelSession(sessionId: string){
        sessionContext.cancelSession(sessionId);
    };

    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            {sessionContext.upcomingSessions.length > 0 ? (
                <ul>
                    {sessionContext.upcomingSessions.map((session) => (
                        <li key={session.id}>
                            <UpcomingSession session={session} onCancel={() => handleCancelSession(session.id)} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Upcoming Sessions Booked</p>
            )}
            <p className="actions">
                <Button onClick={onClose}>Close</Button>
            </p>
        </Modal>
    )


};

export default UpcomingSessions;