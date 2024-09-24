import { createContext, useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ONE_DECK, QUERY_ONE_SPREAD, GET_ME } from '../utils/queries';

// Create the context
const ReadingContext = createContext();

// Custom hook to use the context
export const useReadingContext = () => useContext(ReadingContext);

export const ReadingContextProvider = ({ children }) => {
    const [selectedSpread, setSelectedSpread] = useState(null);
    const [selectedDeck, setSelectedDeck] = useState(null);

    // Fetch user data (which contains defaultDeck and defaultSpread)
    const { data: userData, loading: userLoading } = useQuery(GET_ME);

    // Check if userData contains the default deck and spread
    useEffect(() => {
        console.log('User data:', userData);
        if (userData?.me?.defaultDeck) {
            console.log('Deck ID:', userData.me.defaultDeck._id);
        }
        if (userData?.me?.defaultSpread) {
            console.log('Spread ID:', userData.me.defaultSpread._id);
        }
    }, [userData]);

    // Fetch the default deck and spread once user data is available
    const { data: deckData, loading: deckLoading } = useQuery(QUERY_ONE_DECK, {
        variables: { deckId: userData?.me?.defaultDeck?._id },
        skip: !userData?.me?.defaultDeck,
        fetchPolicy: 'network-only' // Ensure we're fetching fresh data
    });

    const { data: spreadData, loading: spreadLoading } = useQuery(QUERY_ONE_SPREAD, {
        variables: { spreadId: userData?.me?.defaultSpread?._id },
        skip: !userData?.me?.defaultSpread,
        fetchPolicy: 'network-only'
    });

    // Check if deckData and spreadData are being fetched correctly
    useEffect(() => {
        console.log('Is Deck Query Skipped:', !userData?.me?.defaultDeck);
        console.log('Deck Query Result:', deckData);
        console.log('Spread Query Result:', spreadData);
    }, [deckData, spreadData, userData]);

    useEffect(() => {
        if (deckData?.deckDetails) {
            setSelectedDeck(deckData.deckDetails); // Corrected from oneDeck to deckDetails
            console.log('Deck Data Updated:', deckData.deckDetails); // Log when deck data is updated
        }
        if (spreadData?.spreadDetails) {
            setSelectedSpread(spreadData.spreadDetails);
            console.log('Spread Data Updated:', spreadData.spreadDetails); // Log when spread data is updated
        }
    }, [deckData, spreadData]);

    // Log the context updates when selectedSpread and selectedDeck change
    useEffect(() => {
        console.log('Selected Spread updated in context:', selectedSpread);
    }, [selectedSpread]);

    useEffect(() => {
        console.log('Selected Deck updated in context:', selectedDeck);
    }, [selectedDeck]);

    // If data is still loading, don't show children yet
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
