import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput, FAB, Text } from 'react-native-paper';

import Checkbox from "../components/checkbox";

import Header from '../components/Header'

function AddAchievement({ navigation }) {
  const [achievementTitle, setAchievementTitle] = useState('')
  const [selectedA, setSelectedA] = useState({selectedArrayPartOfLife: []})
  const [selectedB, setSelectedB] = useState({selectedArraySatisfier: []})

  function onSaveAchievement() {
    navigation.state.params.addAchievement({ achievementTitle, selectedA, selectedB })
    navigation.goBack()
  }


  const saveSelectedPartOfLife = (isSelected, label) => {
    isSelected ? setSelectedA({ selectedArrayPartOfLife: [...selectedA.selectedArrayPartOfLife.filter(x => x !== label)]}) : setSelectedA({ selectedArrayPartOfLife: [...selectedA.selectedArrayPartOfLife, label]})
  };

  const saveSelectedSatisfied = (isSelected, label) => {
    isSelected ? setSelectedB({ selectedArraySatisfier: [...selectedB.selectedArraySatisfier.filter(x => x !== label)]}) : setSelectedB({ selectedArraySatisfier: [...selectedB.selectedArraySatisfier, label]})
  };
  console.log(selectedA);
  console.log(selectedB);

  
  return (
    <>
      <Header titleText='Add an Achievement' />
      <IconButton
        icon='close'
        size={25}
        color='white'
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label='Add Title Here'
          value={achievementTitle}
          mode='outlined'
          onChangeText={setAchievementTitle}
          style={styles.title}
        />
        <Checkbox
            label="Work"
            saveSelected={saveSelectedPartOfLife}
          />
          <Checkbox
            label="Self"
            saveSelected={saveSelectedPartOfLife}
          />
          <Checkbox
            label="Play"
            saveSelected={saveSelectedPartOfLife}
          />
          <Checkbox
            label="Living"
            saveSelected={saveSelectedPartOfLife}
          />
          <Checkbox
            label="Health, Wellbeing, Fitness"
            saveSelected={saveSelectedSatisfied}
          />
          <Checkbox
            label="Creating"
            saveSelected={saveSelectedSatisfied}
          />
          <Checkbox
            label="New Developments"
            saveSelected={saveSelectedSatisfied}
          />
          <Checkbox
            label="Giving"
            saveSelected={saveSelectedSatisfied}
          />
        <FAB
          style={styles.fab}
          small
          icon='check'
          disabled={achievementTitle == '' ? true : false}
          onPress={() => onSaveAchievement()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  text: {
    height: 300,
    fontSize: 16
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0
  }
})

export default AddAchievement