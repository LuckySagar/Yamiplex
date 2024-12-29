import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();
app.use(cors());
app.use(json());

// MongoDB Connection
connect("mongodb://localhost:27017/yamiplex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
