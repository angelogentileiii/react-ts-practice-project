import SessionItem, { SessionItemProps } from "./SessionItem.tsx";

type SessionListProps = {
    sessions: SessionItemProps[];

}

function SessionList({ sessions }: SessionListProps){
    return (
        <ul id="sessions-list">
            {sessions.map((session) => {
                return <SessionItem {...session} />
            })}
        </ul>
    )
};

export default SessionList