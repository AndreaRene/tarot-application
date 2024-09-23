import { createContext, useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_DECK, QUERY_ONE_SPREAD, GET_ME } from '../utils/queries'; // Using your queries

// Create the context
const ReadingContext = createContext();

// Custom hook to use the context
export const useReadingContext = () => useContext(ReadingContext);

export const ReadingContextProvider = ({ children }) => {
    const [selectedSpread, setSelectedSpread] = useState(null);
    const [selectedDeck, setSelectedDeck] = useState(null);

    // Step 1: Fetch user data (which contains defaultDeck and defaultSpread)
    const { data: userData, loading: userLoading } = useQuery(GET_ME);

    // Step 2: Fetch the default deck and spread once user data is available
    const { data: deckData, loading: deckLoading } = useQuery(QUERY_ONE_DECK, {
        variables: { deckId: userData?.me?.defaultDeck?._id }, // Use the defaultDeck from the user's data
        skip: !userData?.me?.defaultDeck // Skip if no default deck
    });

    const { data: spreadData, loading: spreadLoading } = useQuery(QUERY_ONE_SPREAD, {
        variables: { spreadId: userData?.me?.defaultSpread?._id }, // Use the defaultSpread from the user's data
        skip: !userData?.me?.defaultSpread // Skip if no default spread
    });

    // Step 3: When deck and spread data is fetched, set them in state
    useEffect(() => {
        if (deckData) {
            setSelectedDeck(deckData.oneDeck);
        }
        if (spreadData) {
            setSelectedSpread(spreadData.spreadDetails);
        }
    }, [deckData, spreadData]);

    // Handle loading state
    if (userLoading || deckLoading || spreadLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ReadingContext.Provider
            value={{
                selectedSpread,
                setSelectedSpread,
                selectedDeck,
                setSelectedDeck
            }}>
            {children}
        </ReadingContext.Provider>
    );
};
