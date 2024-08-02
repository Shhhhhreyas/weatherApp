import React from "react";

export default function TwoDetails({ text1, text2, Icon, iconColor }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 16,
        color: "#fff",
      }}
    >
      {text1}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {text2}
        <Icon style={{ marginLeft: 16, color: iconColor }} />
      </div>
    </div>
  );
}
