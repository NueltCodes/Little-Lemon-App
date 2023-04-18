import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const menuItems = {
  "menu": [
    {
      "name": "Greek Salad",
      "price": 12.99,
      "description": "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients.",
      "image": "https://cdn.pixabay.com/photo/2016/03/31/18/34/salad-1299694_960_720.jpg",
      "category": "starters"
    },
    {
      "name": "Bruschetta",
      "price": 7.99,
      "description": "Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese.",
      "image": "https://cdn.pixabay.com/photo/2015/03/17/14/06/bruschetta-677560_960_720.jpg",
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

export default function HomeScreen () {
  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image style={styles.menuItemImage} source={{ uri: item.image }}/>
      <View style={styles.menuItemDetails}>
        <Text style={styles.menuItemTitle}>{item.name}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: 'https://cdn.pixabay.com/photo/2017/06/06/21/53/mediterranean-2372612_960_720.jpg' }} />
        <Text style={styles.headerText}>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
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
    paddingTop: 20,
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    },
    logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    },
    headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
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
    menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    },
    menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    },
    });
    
     
