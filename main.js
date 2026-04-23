import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#f4f4f4" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#1f2f3f",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>FaithGuide</h2>
        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>Home</span>
          <span>Devotionals</span>
          <span>Reading Plans</span>
          <span>Verse of the Day</span>
          <span>Bible</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: "#243447",
        color: "white",
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          FaithGuide
        </h1>

        <p style={{
          fontStyle: "italic",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          "Come to me, all who are weary and burdened, and I will give you rest."
        </p>

        <p style={{ color: "#d4af37", marginTop: "10px" }}>
          — Matthew 11:28
        </p>
      </section>

      {/* SEARCH SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#f4f4f4"
      }}>
        <h2 style={{
          color: "#b8964d",
          fontSize: "36px",
          marginBottom: "10px"
        }}>
          How are you feeling today?
        </h2>

        <p style={{ marginBottom: "20px" }}>
          Select an emotion below or search for what’s on your heart.
        </p>

        <input
          placeholder="Search for verses, topics, or emotions..."
          style={{
            padding: "12px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button style={{
          padding: "12px 20px",
          background: "#b8964d",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Find Verses
        </button>
      </section>

      {/* EMOTION CARDS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "40px"
      }}>
        {[
          "Anxiety", "Stress", "Fear",
          "Grief", "Anger", "Loneliness",
          "Confusion", "Joy", "Gratitude"
        ].map(item => (
          <div key={item} style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ color: "#b8964d" }}>{item}</h3>
            <p style={{ fontSize: "14px" }}>
              Find encouragement for {item.toLowerCase()}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#1f2f3f",
        color: "white",
        padding: "40px"
      }}>
        <h3>FaithGuide</h3>
        <p>A quiet place to find Scripture and peace.</p>
      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
