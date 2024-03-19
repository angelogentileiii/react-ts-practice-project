import Button from "../ui/Button.tsx";

export type SessionItemProps = {
    id: string;
    title: string;
    summary: string;
    image: string;
}

function SessionItem({id, title, summary, image}: SessionItemProps) {
    return (
        <article className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions"></p>
                <Button to={id}>More Info</Button>
            </div>
        </article>
    )
};

export default SessionItem;