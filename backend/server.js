const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/node-login-signup");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User model
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  })
);

// Create a cart schema
const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{}],
  })
);

// Create a cart schema
const Favorite = mongoose.model(
  "Favorite",
  new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{}],
  })
);

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route for user signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route for user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Route to handle adding item to cart
app.post("/addToCart", async (req, res) => {
  const { userId, itemName, Contry } = req.body;

  try {
    // Find the user's cart or create a new one if not exists
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      // Create a new user
      userCart = new Cart({ userId, items: [], Contry });
      await userCart.save();
    }

    // Add the item to user's cart
    userCart.items.push({ Contry: Contry, itemName: itemName });
    await userCart.save();

    // Send response
    res.json({ message: "Item added to cart successfully", cart: userCart });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to handle adding item to cart
app.post("/addToFavorite", async (req, res) => {
  const { userId, itemName, Contry } = req.body;

  try {
    // Find the user's cart or create a new one if not exists
    let userFavorite = await Favorite.findOne({ userId });

    if (!userFavorite) {
      // Create a new user
      userFavorite = new Favorite({ userId, items: [], Contry });
      await userFavorite.save();
    }

    // Add the item to user's cart
    userFavorite.items.push({ Contry: Contry, itemName: itemName });
    await userFavorite.save();

    // Send response
    res.json({ message: "Item added to Favorite successfully", cart: userFavorite });
  } catch (error) {
    console.error("Error adding item to Favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to fetch all cart items for a specific user
app.get("/cartItems/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user's cart
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found for the user" });
    }

    // Return the cart items
    res.json({ cartItems: userCart.items });
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to fetch all cart items for a specific user
app.get("/FavoriteItems/:userId", async (req, res) => {
    const { userId } = req.params;
  
    try {
      // Find the user's cart
      const userFavorite = await Favorite.findOne({ userId });
  
      if (!userFavorite) {
        return res.status(404).json({ message: "Favorite not found for the user" });
      }
  
      // Return the cart items
      res.json({ FavoriteItems: userFavorite.items });
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Endpoint to remove an item from the cart for a specific user
app.delete("/removeFromCart/:userId/:itemName", async (req, res) => {
  const { userId, itemName } = req.params;

  try {
    // Find the user's cart
    const userCart = await Cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ message: "Cart not found for the user" });
    }

    // Remove the item from the cart
    userCart.items = userCart.items.filter(
      (item) => item.itemName !== itemName
    );
    await userCart.save();

    // Send response
    res.json({
      message: "Item removed from cart successfully",
      cart: userCart,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// / Endpoint to remove an item from the cart for a specific user
app.delete("/removeFromFavorite/:userId/:itemName", async (req, res) => {
  const { userId, itemName } = req.params;

  try {
    // Find the user's cart
    const userFavorite = await Favorite.findOne({ userId });

    if (!userFavorite) {
      return res.status(404).json({ message: "Favorite not found for the user" });
    }

    // Remove the item from the cart
    userFavorite.items = userFavorite.items.filter(
      (item) => item.itemName !== itemName
    );
    await userFavorite.save();

    // Send response
    res.json({
      message: "Item removed from Favorite successfully",
      cart: userFavorite,
    });
  } catch (error) {
    console.error("Error removing item from Favorite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
