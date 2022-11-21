import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <View>
            <Text style={styles.text}>Home</Text>

            {loading && <Text style={styles.text}>Loading....</Text>}

            {error && !loading && <Text style={styles.text}>{error}</Text>}

            {users && users.map((user, i) => (
                <Text key={i} style={styles.text}>{user.name}</Text>
            ))}

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#0000FF',
    },
});

export default HomeScreen;
