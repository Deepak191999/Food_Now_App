"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Sandwich",
            price: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/sandwich.webp",
            type: "breakfast",
        },
        {
            name: "Poha",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/poha.webp",
            type: "breakfast",
        },
        {
            name: "Idli Sambar",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/idli.jpg",
            type: "breakfast",
        },
        {
            name: "Oats Chilla",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/oats.jpeg",
            type: "breakfast",
        },
        {
            name: "Tandoori Chaap",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/chaap.jpg",
            type: "lunch",
        },
        {
            name: "Veg Biryani",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/biryani.jpg",
            type: "lunch",
        },
        {
            name: "Amritsari Kulcha",
            price: 45,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/thalli.jpeg",
            type: "lunch",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/cake.png",
            type: "lunch",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "Veg Thalli",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/thalliVeg.jpg",
            type: "dinner",
        },
        {
            name: "Pasta",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pasta.jpg",
            type: "dinner",
        },
        {
            name: "Paneer",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/panner.jpg",
            type: "dinner",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map