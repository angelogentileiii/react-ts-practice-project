import { createContext, useContext } from "react";

export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    image: string;
    duration: number;
};

type SessionState = {
upcomingSessions: Session[];
};

type SessionContext = SessionState & {
    bookSession: (session: Session) => void;
    cancelSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionContext | null>(null);

export function useSessionsContext(){
    const context = useContext(SessionsContext);

    if (!context) {
        throw new Error('Must use context within useContextProvider')
    };

    return context;
}

// each possible action available
type BookSessionAction = {
    type: 'BOOK';
    session: Session;
};

type CancelSessionAction = {
    type: 'CANCEL';
    session: Session;
}

type SessionActions = BookSessionAction | CancelSessionAction;

// custom reducer to dispatch either action based on click
function sessionReducer(state: SessionState, action: SessionActions){
    switch(action.type){
        case 'BOOK':
            if (state.upcomingSessions.some((session) => session.id === action.session.id)) {
                return state
            };

            return {
                upcomingSessions: state.upcomingSessions.concat(action.session)
            };
        case 'CANCEL':
            if (state.upcomingSessions.some((session) => session.id === action.session.id)) {
                return {
                    upcomingSessions: state.upcomingSessions.filter((session) => session.id !== action.session.id)
                }
            };

            return state;
    }

};



