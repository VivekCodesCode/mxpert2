import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app-container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="title">Hardware & Software Request Portal</h1>
        <p className="description">
          Please submit your hardware or software requirements using the form
          below. Your request will be reviewed by three approvers. Once approved,
          your request will be resolved at the earliest.
        </p>

        <motion.a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=BanfuWFnVEqKoHt2R7uvuKE37q0akP1Agn-s5XCMbHhUMThGV0o2RThQNFUyQzBCOUZMVEM3UUMzSy4u"
          className="form-link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
        >
          Submit Your Request
        </motion.a>
      </motion.div>

      <footer className="footer">
        © {new Date().getFullYear()} Impetus Internal IT | All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
