import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

export default function FetchDataScreen() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Remote Data (Users)</Text>
      <Button title="Fetch Users" onPress={fetchUsers} />

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Company: {item.company?.name || 'N/A'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  error: { color: 'red', marginTop: 10 },
  userCard: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: { fontWeight: '600' },
});
