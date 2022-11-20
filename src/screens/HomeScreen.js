import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <View>
            <Text style={styles.text}>Home</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <Text style={styles.text}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
    },
});

export default HomeScreen;
