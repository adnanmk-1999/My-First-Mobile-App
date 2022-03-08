import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Planet from './planet';

import styles from './styles';

const fetchPlanets = async () => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

const queryClient = new QueryClient();

function Planets() {
  const {data, status} = useQuery('planets', fetchPlanets);
  console.log(data);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Planets</Text>
          {status === 'loading' && (
            <Text style={styles.status}>Loading Data</Text>
          )}
          {status === 'error' && (
            <Text style={styles.status}>Error Fetching Data</Text>
          )}
          {status === 'success' && (
            <View>
              {data.results.map(planet => (
                <Planet key={planet.name} planet={planet} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Wraped(){
    return(
        <QueryClientProvider client={queryClient}>
            <Planets /> 
        </QueryClientProvider>
    );
}
export default Wraped;
