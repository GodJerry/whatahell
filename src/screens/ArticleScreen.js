import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { Fonts, Colors, Layout } from '../constants';
import { Dropdown, Button } from '../components';
import {
  Text,
  Title,
  Caption,
} from '../components/StyledText';

const recommendations = [
  { id: 0, title: 'google', brand: 'phone', oldPrice: 'jerry', price: 'herry', rating: '3.5', badge: 'busy' },
  { id: 1, title: 'lg', brand: 'earset', rating: '4.2', price: 'perry' },
  { id: 2, title: 'samsung', brand: 'ble', oldPrice: 'jerry', price: 'herry', rating: '4.8', badge: 'busy' },
  { id: 3, title: 'nokia', brand: 'iot', oldPrice: 'jerry', price: 'herry', rating: '5.0', badge: 'busy' },
  { id: 4, title: 'kt', brand: 'lte', rating: '2.1', price: 'merry' },
];

export default function ArticleScreen(props) {
  const _renderRecommendationCard = ({ item }) => {
    return (
      <TouchableOpacity style={styles.recommendationItem}>
        <View style={styles.recommendationItemTopContainer}>
          { item.badge && (
            <View style={styles.recommendationItemBadge}>
              <Caption white size={12}>{item.badge}</Caption>
            </View>
          )}

          <View style={styles.recommendationItemRating}>
            <Caption bold color={Colors.yellow}>{item.rating}</Caption>
          </View>
        </View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{uri:itemParams.url}}
          resizeMode="contain"
        />
        <View style={styles.recommendationBody}>
          <Text color={Colors.gray} style={styles.recommendationTitle}>{item.title}</Text>
          <Text color={Colors.primaryLight}>{item.brand}</Text>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            { item.oldPrice && (
              <Text lineThrough color={Colors.gray} style={{ marginRight: 10 }}>{item.oldPrice}</Text>
            )}
            <Text color={item.oldPrice ? Colors.secondary : Colors.gray}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const itemParams = props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={{
            flexDirection: 'column',
            flex: 1,
          }}>
            <Text style={{ color: Colors.primaryLight }}>{itemParams.artist.split(' ')[0]}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch', marginTop: 8 }}>
              <Title bold color={Colors.gray}>{itemParams.image}</Title>
              <Title bold color={Colors.yellow}>4.8</Title>
            </View>
          </View>
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            autoplay
            ref={(carousel) => { this._carousel = carousel; }}
            sliderWidth={Layout.window.width - 30}
            itemWidth={Layout.window.width}
            renderItem={({item, index}) => (
              <Image
                resizeMode="contain"
                style={{ height: 250, width: Layout.window.width }}
                source={{uri:itemParams.url}}
              />
            )}
            data={[
              require('../../assets/images/nike1.png'),
              require('../../assets/images/nike2.jpg'),
            ]}
          />
          { itemParams.badge && (
            <View style={styles.badge}>
              <Caption white bold>{itemParams.badge}</Caption>
            </View>
          )}
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyHeading}>
            <Title color={Colors.gray} size={23}>{itemParams.price}</Title>
            <Caption underline size={15} color={Colors.lightGray}>Let us arrange Meeting</Caption>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text color={Colors.primaryLight}>Agenda</Text>
            <View style={styles.row}>
              <View style={styles.sizeDropdownContainer}>
                <Dropdown
                  borderColor={Colors.grey}
                  color={Colors.gray}
                  placeholder="Choose"
                  items={['ODM','OEM','NDA']}
                  onSelect={index => props.setSelectedSizeIndex(parseInt(index, 10))}
                  selectedIndex={props.selectedSizeIndex}
                />
              </View>
              
            </View>
          </View>
          <View style={styles.buttonsSection}>
            <View style={{ flex: 3 }}>
              <Button secondary caption="Chat" rounded />
            </View>
            <View style={styles.actionButtonContainer}>
              <Button action bgColor="#E6E6E6">
                <Text><Icon name="heart" size={20} color="white" /></Text>
              </Button>
            </View>
          </View>
          <View style={styles.description}>
            <Title
              bold
              color={Colors.lightGray}
              size={17}
            >
              Company Detail Details
            </Title>
            <Text style={styles.p}>
            {itemParams.artist}
            </Text>
            <Text style={styles.p}>
            communication, and power supply between computers and electronic devices.[4] It is currently developed by the USB Implementers Forum (USB IF).
            </Text>
          </View>
          <View style={{ alignItems: 'center', paddingVertical: 15, }}>
            <Button
              bordered
              bgColor={Colors.grey}
              textColor={Colors.gray}
              caption="Schedule"
              style={{
                width: 200,
              }}
            />
          </View>
        </View>
        <View style={styles.recommendationsContainer}>
          <Title color={Colors.lightGray} style={{ marginVertical: 10 }}>YOU MIGHT ALSO LIKE</Title>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={recommendations}
            keyExtractor={item => item.id}
            renderItem={_renderRecommendationCard}
          />
        </View>

        <View style={{ paddingBottom: 50, paddingHorizontal: 15, }}>
          <Title color={Colors.lightGray} style={{ marginVertical: 10 }}>Share</Title>
          <View style={{ flexDirection: 'row'}}>
            <Text color={Colors.gray}>Share with a tag</Text>
            <Text color={Colors.blue} style={{ marginLeft: 5}}>#whitetrainers</Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Button
              action
              bgColor="#4867AD"
              onPress={() => {}}
            >
              <Icon name="facebook" size={25} color="white" />
            </Button>
            <Button
              action
              bgColor="#7A3EB1"
              onPress={() => {}}
              style={{ marginHorizontal: 15 }}
            >
              <Icon name="instagram" size={25} color="white" />
            </Button>
            <Button
              action
              bgColor={Colors.yellow}
              onPress={() => {}}
            >
              <Icon name="snapchat" size={25} color="white" />
            </Button>
          </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  carouselContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  bodyContainer: {
    paddingHorizontal: 15,
  },
  bodyHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
  },
  sizeDropdownContainer: {
    flex: 2,
    paddingVertical: 10,
    paddingRight: 5,
  },
  quantityDropdownContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 5,
  },
  buttonsSection: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  actionButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    marginVertical: 5,
    lineHeight: 20,
    letterSpacing: 0,
    color: Colors.gray,
  },
  description: {
    paddingTop: 10,
    marginVertical: 10,
  },
  recommendationsContainer: {
    backgroundColor: Colors.white,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  recommendationItem: {
    marginVertical: 10,
    paddingBottom: 10,
    marginRight: 15,
    borderWidth: 0.7,
    borderColor: Colors.lightGray,
  },
  recommendationBody: {
    backgroundColor: 'white',
    padding: 8,
  },
  recommendationTitle: {
    marginVertical: 5,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: Colors.green,
    position: 'absolute',
    left: 15,
    top: 0,
  },
  recommendationItemTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingRight: 5,
  },
  recommendationItemBadge: {
    backgroundColor: Colors.secondary,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  recommendationItemRating: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 3,
  },
});
