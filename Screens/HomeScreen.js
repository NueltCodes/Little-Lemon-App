import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const menuItems = {
  "menu": [
    {
      "name": "Greek Salad",
      "price": 12.99,
      "description": "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients.",
      "image": "https://images.ctfassets.net/lufu0clouua1/ZaeHMvbskiYGrcp8hyOZq/13c8278efa88cf272a08a4ede3469b03/Large-Greek-Salad-34793.jpg",
      "category": "starters"
    },
    {
      "name": "Bruschetta",
      "price": 7.99,
      "description": "Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese.",
      "image": "https://www.archanaskitchen.com/images/archanaskitchen/World_Appetizers/Roasted_Eggplant_Bruschetta_with_Caponata_Olives_and_Raisins-1.jpg",
      "category": "starters"
    },
    {
      "name": "Grilled Fish",
      "price": 20.00,
      "description": "Fantastic grilled fish seasoned with salt.",
      "image": "https://sisijemimah.com/wp-content/uploads/2016/04/Spicy-grilled-fish-9.jpg",
      "category": "mains"
    },
    {
      "name": "Pasta",
      "price": 6.99,
      "description": "Delicious pasta for your delight.",
      "image": "https://cdn.pixabay.com/photo/2017/12/10/14/47/pasta-3010062_960_720.jpg",
      "category": "mains"      
    },
    {
      "name": "Lemon Dessert",
      "price": 4.99,
      "description": "You can't go wrong with this delicious lemon dessert!",
      "image": "https://w0.peakpx.com/wallpaper/854/507/HD-wallpaper-lime-cheesecake-cake-food-cheesecake-lemon-lime-sweet-dessert-green-white-cream-thumbnail.jpg",
      "category": "desserts"      
    }
  ]
}
const categories = {
  "lists": [
    {
      "name": "Starter",
    },
    {
      "name": "Mains",
    },
    {
      "name": "Deserts",
      },
    {
      "name": "Continentals",
      },
    {
      "name": "Drinks",     
    },
    {
      "name": "Specials",      
    }
  ]
}

export default function HomeScreen () {
  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image style={styles.menuItemImage} source={{ uri: item.image }}/>
      <View style={styles.menuItemDetails}>
        <Text style={styles.menuItemTitle}>{item.name}</Text>
        <Text style={styles.menuItemDescription} numberOfLines={3} >{item.description}</Text>
        <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerName}>
                <Text style={styles.headerNameText}>
                     Little Lemon
                    <Text style={styles.headerNameSubText}>{"\n"}Chicago.</Text>
                </Text>

            </View>
        <View style={styles.header}>

        <Text style={styles.headerText}>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
        <Image style={styles.logo} source={{ uri: 'https://img.freepik.com/free-photo/side-view-fried-fish-with-glass-wine-lemon-human-hand-white-plate_176474-3080.jpg' }} />
      </View>
      <TouchableOpacity>
        <View style={styles.serachBackground}>
          <Ionicons name="ios-search" size={24} color="black" />
        </View>
      </TouchableOpacity>
      
      </View>

      <View style={styles.categoryListContainer}>
      <FlatList
        data={categories.lists}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </View>

      <FlatList
        data={menuItems.menu}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.name}
        style={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
},
    headerContainer: {
    backgroundColor: '#495E57',
    paddingTop: 20,
    marginBottom:20,
    paddingHorizontal:10,
    marginHorizontal: -20,
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    // padding:10,
    },
    logo: {
    width: 120,
    height: 100,
    marginRight: 10,
    borderRadius:20,
    },
    headerText: {
    flex: 1,
    fontSize: 16,
    color:'white',
    },
    headerName: {
    alignItems: 'flex-start',
    },
    headerNameText: {
    fontSize: 36,
    fontWeight: 'bold',
    color:"#F4CE14",
    },
    headerNameSubText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'white',
    },
    menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    },
    menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
    },   
    serachBackground:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems: 'center',
    backgroundColor:"white",
    width:30,
    height:30,
    borderRadius:100,
    marginBottom:10
    },  
    categoryListContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius:10,
    paddingVertical: 10,
    marginBottom:20
    },
    categoryList: {
    paddingHorizontal: 10,
    },
    categoryItem: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    },
    
    image: {
    width: 80,
    height: 80,
    marginRight: 20,
    },
    menuItemInfo: {
    flex: 1,
    },
    menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    },
    menuItemTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontWeight:'bold'
    },
    menuItemDescription: {
    fontSize: 14,
    maxWidth: '87%',
    color: '#666',
    marginBottom: 5,
    },
    menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    },
    });
    
     
