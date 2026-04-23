import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{
      fontFamily: "Georgia, serif",
      background: "#0f1c2e",
      color: "#fff",
      minHeight: "100vh"
    }}>

      {/* NAVBAR */}
      <div style={{
        background: "#16263d",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "20px", color: "#d4af37" }}>
          FaithGuide
        </div>

        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>Home</span>
          <span>Devotionals</span>
          <span>Reading Plans</span>
          <span>Verse of the Day</span>
          <span>Bible</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#1b2f4b"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          FaithGuide
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          "Come to me, all who are weary and burdened, and I will give you rest."
        </p>

        <p style={{ marginTop: "10px", color: "#d4af37" }}>
          — Matthew 11:28
        </p>
      </div>

      {/* SEARCH SECTION */}
      <div style={{
        background: "#f5f5f5",
        color: "#000",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#c9a94d", marginBottom: "10px" }}>
          How are you feeling today?
        </h2>

        <p style={{ marginBottom: "20px" }}>
          Select an emotion below or search for what's on your heart.
        </p>

        <input
          placeholder="Search for verses, topics, or emotions..."
          style={{
            padding: "12px",
            width: "300px",
            marginRight: "10px"
          }}
        />

        <button style={{
          padding: "12px 20px",
          background: "#c9a94d",
          border: "none",
          color: "#fff"
        }}>
          Find Verses
        </button>
      </div>

      {/* CARDS */}
      <div style={{
        background: "#eaeaea",
        padding: "40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {["Anxiety", "Stress", "Fear", "Grief", "Anger", "Loneliness"].map((item) => (
          <div key={item} style={{
            background: "#fff",
            padding: "20px",
            textAlign: "center",
            borderRadius: "8px"
          }}>
            <h3 style={{ color: "#c9a94d" }}>{item}</h3>
            <p style={{ fontSize: "14px" }}>
              Find peace and encouragement
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
