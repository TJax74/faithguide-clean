import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ fontFamily: "serif", background: "#f5f5f5" }}>

      {/* NAVBAR */}
      <nav style={{
        background: "#1f2f3f",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>📖 FaithGuide</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>Home</span>
          <span>Devotionals</span>
          <span>Reading Plans</span>
          <span>Verse of the Day</span>
          <span>Bible</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        height: "400px",
        background: "#2c3e50",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "48px" }}>FaithGuide</h1>
        <p style={{ fontStyle: "italic", maxWidth: "600px" }}>
          "Come to me, all who are weary and burdened, and I will give you rest."
        </p>
        <p style={{ color: "#d4af37" }}>— Matthew 11:28</p>
      </section>

      {/* SEARCH */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#b8964d", fontSize: "36px" }}>
          How are you feeling today?
        </h2>

        <div style={{ marginTop: "20px" }}>
          <input
            placeholder="Search for verses..."
            style={{
              padding: "10px",
              width: "300px",
              marginRight: "10px"
            }}
          />
          <button style={{
            padding: "10px 20px",
            background: "#b8964d",
            color: "white",
            border: "none"
          }}>
            Find Verses
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px 40px"
      }}>
        {["Anxiety", "Stress", "Fear", "Grief", "Anger", "Joy"].map(item => (
          <div key={item} style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <h3 style={{ color: "#b8964d" }}>{item}</h3>
            <p>Find encouragement for {item.toLowerCase()}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#1f2f3f",
        color: "white",
        padding: "40px",
        marginTop: "40px"
      }}>
        <h3>FaithGuide</h3>
        <p>A quiet place to find Scripture and peace.</p>
      </footer>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
