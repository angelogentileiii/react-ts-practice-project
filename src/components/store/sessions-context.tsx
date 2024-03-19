import { type ReactNode, createContext, useContext, useReducer } from "react";

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
    sessionId: string;
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
            if (state.upcomingSessions.some((session) => session.id === action.sessionId)) {
                return {
                    upcomingSessions: state.upcomingSessions.filter((session) => session.id !== action.sessionId)
                }
            };

            return state;
    }
};

export default function SessionContextProvider({ children }: {children: ReactNode}) {
    const [sessionState, dispatch] = useReducer(sessionReducer, {
        upcomingSessions: []
    });

    function bookSession(session: Session) {
        dispatch({type: 'BOOK', session});
    };

    function cancelSession( sessionId: string ) {
        dispatch({ type: 'CANCEL', sessionId });
    }

    const contextValue = {
        upcomingSessions: sessionState.upcomingSessions,
        bookSession,
        cancelSession
    }

    return (
        <SessionsContext.Provider value={contextValue}>
            {children}
        </SessionsContext.Provider>
    )
};



